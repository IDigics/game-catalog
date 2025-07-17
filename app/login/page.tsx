import React from "react";
import Navbar from "../../components/Navbar";
import LoginForm from "../../components/LoginForm";

export default function Login(): React.ReactElement {
  return (
    <div>
      <div className="min-h-screen bg-[#040404] bg-cover bg-center">
        <div className="flex justify-center items-center flex-grow pt-20">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
