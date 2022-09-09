import "../assets/scss/Dropdown.css"
function Dropdown (props) {
    return (
        <div className="Dropdown">
            <a className="Dropdown-Links" href={props.links}>{props.first}</a>
            <a className="Dropdown-Links" href={props.links}>{props.second}</a>
            <a className="Dropdown-Links" href={props.links}>{props.third}</a>
            <a className="Dropdown-Links" href={props.links}>{props.fourth}</a>
            <a className="Dropdown-Links" href={props.links}>{props.fifth}</a>
            <a className="Dropdown-Links" href={props.links}>{props.sixth}</a>
            <a className="Dropdown-Links" href={props.links}>{props.seventh}</a>
            <a className="Dropdown-Links" href={props.links}>{props.eighth}</a>
            <a className="Dropdown-Links" href={props.links}>{props.ninth}</a>
            <a className="Dropdown-Links" href={props.links}>{props.tenth}</a>
            <a className="Dropdown-Links" href={props.links}>{props.eleventh}</a>
            <a className="Dropdown-Links" href={props.links}>{props.twelfth}</a>
        </div>
    );       
}

export default Dropdown;