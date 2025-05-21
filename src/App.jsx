import { useState } from "react";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/SignupForm";

export default function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="p-10">
      <button
        onClick={() => setShowSignup(!showSignup)}
        className="mb-6 bg-gray-300 px-4 py-2 rounded"
      >
        {showSignup ? "กลับไป Login" : "ไปหน้า Signup"}
      </button>
      {showSignup ? <SignupForm /> : <LoginForm />}
    </div>
  );
}