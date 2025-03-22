"use client";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton = () => {
  const handleSuccess = async (response: any) => {
    try {
      const { credential } = response;
      console.log(credential);
      const { data } = await axios.post("http:localhost:3000/api/users/auth/google", {
        token: credential,
      });

      // Lưu token vào localStorage hoặc context để sử dụng sau này
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={"270011677533-nt19754kg2ds0aqi7qa93adhlsfbnu4r.apps.googleusercontent.com"}>
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
