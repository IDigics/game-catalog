import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div className="min-h-screen bg-[#040404] bg-cover bg-center">
        <Navbar />
        <div className="flex justify-center items-center flex-grow pt-20">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
