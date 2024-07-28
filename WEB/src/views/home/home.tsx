import React from "react";
import UseHome from "./useHome";

const Home: React.FC = () => {
  const { login } = UseHome();
  return (
    <div className="flex flex-col  gap-5 h-screen w-screen justify-center items-center text-zinc-100 bg-zinc-900">
      <h1 className="text-5xl font-bold">{login ? login.username : ""}</h1>
    </div>
  );
};

export default Home;
