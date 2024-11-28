import InputWithLabel from "./InputWithLabel";
import { NavLink } from "react-router-dom";
import Header from "./Header";
const Register = () => {
    return (<div>
        <Header
            headerText="Register"
        />
        <InputWithLabel
            id="adSoyad"
            label="İsminizi ve soyadınızı girin:"
            type="text"
            isFocused
            onInputChange={() => null}
            value={""}
        />
        <InputWithLabel
            id="eposta2"
            label="E-posta adresinizi girin:"
            type="text"
            isFocused
            onInputChange={() => null}
            value={""}
        />
        <InputWithLabel
            id="pasword2"
            label="Şifrenizi girin:"
            type="password"
            isFocused
            onInputChange={() => null}
            value={""}
        />

        <h4><NavLink className="navbar-brand" to="/register">Giriş Yap</NavLink></h4>
        <button className="btn btn-default pull-right">Kayıt Ol</button>

    </div>
    );
}
export default Register;