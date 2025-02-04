import "./banner.css"
import logo from "../../assets/logo.webp"

export default function Banner() {
    return (
        <div id="banner">
            <div id="logo-pack">
                <img id="logo" src={logo} alt="logo" width="20%"/>
                <h1 id="name">Miguel Obenza</h1>
            </div>
        </div>
    );
}