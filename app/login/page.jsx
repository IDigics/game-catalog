import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#040404] bg-cover bg-center">
      <Navbar />
      <div className="flex justify-center items-center flex-grow pt-20">
        <LoginForm />
      </div>
    </div>
  );
}
