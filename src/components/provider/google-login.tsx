"use client";

import { useSearchParams } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "./auth-provider";
import { Suspense } from "react";

const GoogleLoginButton = () => {
  const { user, login, logout, setReferralId } = useAuth();

  const searchParams = useSearchParams();
  const referralId = searchParams.get("ref");
  setReferralId(referralId);
  const handleSuccess = (response: any) => {
    const { credential } = response;
    login(credential);
  };

  return (
    <Suspense>
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Login Failed")}
          />
        )}
      </div>
    </Suspense>
  );
};

export default GoogleLoginButton;
