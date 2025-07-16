import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#040404] bg-cover bg-center">
      <Navbar />
      <div className="flex justify-center items-center flex-grow pt-20">
        <SignUpForm />
      </div>
    </div>
  );
}
