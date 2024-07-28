import React from "react";
import UseHome from "./useHome";
import { Button } from "../../components/button";

const Home: React.FC = () => {
  const { login, getData, handleNavigate } = UseHome();
  getData();
  return (
    <div className="flex flex-col  gap-5 h-screen w-screen justify-center items-center text-zinc-100 bg-zinc-900">
      <h1 className="text-5xl font-bold">
        Username : {login ? login.username : ""}
      </h1>
      <h3 className="mb-40">Login realizado com sucesso</h3>
      <Button variant="primary" onClick={() => handleNavigate()}>
        <Button.Title>Voltar</Button.Title>
      </Button>
    </div>
  );
};

export default Home;
