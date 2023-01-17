import { useContext, useEffect } from "react";
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../context/Profile";

function Login() {
  const { setProfile, isLogin, setIsLogin, setSocial } =
    useContext(ProfileContext);
  let navigate = useNavigate();

  const handleLogin = () => {
    if (isLogin) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    handleLogin();
  }, [!isLogin]);

  return (
    <div className="container">
      <div className="social-buttons">
        <LoginSocialGoogle
          client_id="1095469552543-cnr4o0f16vlb3vfsddm0o4p37b0u3f1m.apps.googleusercontent.com"
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ data }) => {
            console.log(data);
            setProfile(data);
            setSocial("Google");
            setIsLogin(true);
          }}
          onReject={(err) => console.log(err)}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
        <LoginSocialFacebook
          appId="1173655549935837"
          onResolve={({ data }) => {
            console.log(data);
            setProfile(data);
            setSocial("Facebook");
            setIsLogin(true);
          }}
          onReject={(err) => console.log(err)}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
    </div>
  );
}

export default Login;
