import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(email, password);

    setEmail("");
    setPassword("");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border  py-10 px-8  rounded-md">
        <h1 className="text-2xl text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center ">
          <input
            type="text"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-2 p-2 border  text-black
             outline-none rounded-md"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            className="my-2 border p-2 text-black outline-none rounded-md"
          />
          <button className="p-2 w-full bg-red-700 rounded-md hover:bg-rose-500 transition-all" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
