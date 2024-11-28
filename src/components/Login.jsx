import InputWithLabel from "./InputWithLabel";
import { NavLink } from "react-router-dom";
import Header from "./Header";
const Login = () => {
    return (<div>
        <Header
            headerText="Login"
        />
        <InputWithLabel
            id="eposta"
            label="E-posta adresinizi girin:"
            type="text"
            isFocused
            onInputChange={() => null}
            value={""}
        />
        <InputWithLabel
            id="password"
            label="Şifrenizi girin:"
            type="password"
            isFocused
            onInputChange={() => null}
            value={""}
        />

        <h4><NavLink className="navbar-brand" to="/login">Giriş Yap</NavLink></h4>
        <button className="btn btn-default pull-right">Giriş Yap</button>

    </div>
    )
}
export default Login;