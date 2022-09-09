import React from 'react';
import Autosuggest from 'react-autosuggest';
import "../assets/scss/SearchForm/autoSuggest.css"
import axios from "axios";

// Otomatik Öneri'ye verilen herhangi bir giriş değeri için önerilerin nasıl hesaplanacağını öğretin.

// Öneri tıklandığında, Otomatik Önerinin girişi doldurması gerekir
// tıklanan öneriye göre. Otomatik Öneri'ye nasıl hesaplanacağını öğretin.
// verilen her öneri için giriş değeri.
const getSuggestionValue = suggestion => suggestion.label;
// Use your imagination to render suggestions.


const renderSuggestion = suggestion => (
  <div className='suggestion_item'>
        <div className='city_info'>
            {suggestion.label}
        </div>
        <div className='city_code'>
            {suggestion.id}
        </div>
  </div>
);
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : value.filter(lang =>
    lang.label.toLowerCase().slice(0, inputLength) === inputValue
  );
};

class autoSuggest extends React.Component {
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

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onChange = async (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    if(newValue.length >= 3){ //length 3 ten büyükse arama yap. 
      axios.post(`/ucak-bileti/trip-autocomplete/?term=${newValue}`,{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
      }}).then(value => {
        this.setState({
          suggestions: value.data
        });
      })
    }
  };

    // Autosuggest, önerileri her güncellemeniz gerektiğinde bu işlevi çağırır.
    // Bu mantığı yukarıda zaten uyguladınız, bu yüzden sadece kullanın.

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

    const departureAirport = {
        departure_airport_name: {value},
    }
    window.localStorage.setItem('departureAirport', JSON.stringify(departureAirport));

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

export default autoSuggest;