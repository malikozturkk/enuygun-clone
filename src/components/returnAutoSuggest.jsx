import React from 'react';
import Autosuggest from 'react-autosuggest';
import "../assets/scss/SearchForm/autoSuggest.css"
// Otomatik olarak önermek istediğiniz dillerin bir listesinin olduğunu hayal edin.
const airports = [
  {
    name: 'Adana Havalimanı',
    code: 'ADA'
  },
  {
    name: 'Ankara Esenboğa Havalimanı',
    code: 'ESB'
  },
  {
    name: 'Alanya Gazipaşa Havalimanı',
    code: 'GZP'
  },
  {
    name: 'Antalya Havalimanı',
    code: 'AYT'
  },
  {
    name: 'Balıkesir Kocaseyit Havalimanı',
    code: 'EDO'
  },
  {
    name: 'Bursa Yenişehir Havalimanı',
    code: 'YEI'
  },
  {
    name: 'Çanakkale Havalimanı',
    code: 'CKZ'
  },
  {
    name: 'Denizli Çardak Havalimanı',
    code: 'DNZ'
  },
  {
    name: 'Diyarbakır Havalimanı',
    code: 'DIY'
  },
  {
    name: 'Elazığ Havalimanı',
    code: 'EZS'
  },
  {
    name: 'Erzurum Havalimanı',
    code: 'ERZ'
  },
  {
    name: 'Eskişehir Hasan Polatkan Havalimanı',
    code: 'AOE'
  },
  {
    name: 'Gaziantep Havalimanı',
    code: 'GZT'
  },
  {
    name: 'Hatay Havalimanı',
    code: 'HTY'
  },
  {
    name: 'Isparta Süleyman Demirel Havalimanı',
    code: 'ISE'
  },
  {
    name: 'İstanbul Havalimanı',
    code: 'IST'
  },
  {
    name: 'İstanbul Sabiha Gökçen Havalimanı',
    code: 'SAW'
  },
  {
    name: 'İzmir Adnan Menderes Havalimanı',
    code: 'ADB'
  },
  {
    name: 'Kars Harakani Havalimanı',
    code: 'KSY'
  },
  {
    name: 'Kayseri Havalimanı',
    code: 'ASR'
  },
  {
    name: 'Kocaeli Cengiz Topel Havalimanı',
    code: 'KCO'
  },
  {
    name: 'Konya Havalimanı',
    code: 'KYA'
  },
  {
    name: 'Kütahya Zafer Havalimanı',
    code: 'KZR'
  },
  {
    name: 'Malatya Havalimanı',
    code: 'MLX'
  },
  {
    name: 'Muğla Dalaman Havalimanı',
    code: 'DLM'
  },
  {
    name: 'Muğla Milas-Bodrum Havalimanı',
    code: 'BJV'
  },
  {
    name: 'Nevşehir Kapadokya Havalimanı',
    code: 'NAV'
  },
  {
    name: 'Ordu Giresun Havalimanı',
    code: 'OGU'
  },
  {
    name: 'Samsun Çarşamba Havalimanı',
    code: 'SZF'
  },
  {
    name: 'Sinop Havalimanı',
    code: 'NOP'
  },
  {
    name: 'Sivas Nuri Demirağ Havalimanı',
    code: 'VAS'
  },
  {
    name: 'Şanlıurfa GAP Havalimanı',
    code: 'GNY'
  },
  {
    name: 'Tekirdağ Çorlu Havalimanı',
    code: 'TEQ'
  },
  {
    name: 'Trabzon Havalimanı',
    code: 'TZX'
  },
  {
    name: 'Uşak Havalimanı',
    code: 'USQ'
  },
  {
    name: 'Van Ferit Melen Havalimanı',
    code: 'VAN'
  },
  {
    name: 'Zonguldak Çaycuma Havalimanı',
    code: 'ONQ'
  },
];


// Otomatik Öneri'ye verilen herhangi bir giriş değeri için önerilerin nasıl hesaplanacağını öğretin.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : airports.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// Öneri tıklandığında, Otomatik Önerinin girişi doldurması gerekir
// tıklanan öneriye göre. Otomatik Öneri'ye nasıl hesaplanacağını öğretin.
// verilen her öneri için giriş değeri.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div className='suggestion_item'>
        <div className='city_info'>
            {suggestion.name}
        </div>
        <div className='city_code'>
            {suggestion.code}
        </div>
  </div>
);

class ReturnAutoSuggest extends React.Component {
  constructor() {
    super();

    // Otomatik Öneri, kontrollü bir bileşendir.
    // Bu, bir giriş değeri sağlamanız gerektiği anlamına gelir
    // ve bu değeri güncelleyen bir onChange işleyicisi (aşağıya bakın).
    // Önerilerin de Otomatik Öneriye sunulması gerekiyor,
    // ve Otomatik Öneri kapalı olduğu için başlangıçta boşturlar.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

    // Autosuggest, önerileri her güncellemeniz gerektiğinde bu işlevi çağırır.
    // Bu mantığı yukarıda zaten uyguladınız, bu yüzden sadece kullanın.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Otomatik öneri, önerileri her temizlemeniz gerektiğinde bu işlevi çağırır.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Otomatik öneri, tüm bu aksesuarlardan girişe geçecektir.
    const inputProps = {
      placeholder: 'Şehir veya Havalimanı Yazın',
      value,
      onChange: this.onChange
    };

    const returnAirport = {
        return_airport_name: {value}
    }
 
    window.localStorage.setItem('returnAirport', JSON.stringify(returnAirport));

    // Son olarak, render edin!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default ReturnAutoSuggest;