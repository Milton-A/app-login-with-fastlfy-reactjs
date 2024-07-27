import React from "react";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { User, Lock } from "lucide-react";
import { Link, redirect } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col  gap-5 h-screen w-screen justify-center items-center text-zinc-100 bg-zinc-900">
      <div className="flex flex-col justify-center items-center">
        <img src={require("./assets/logo.png")} alt="app logo" width={120} />
        <span>SEJA BEM-VINDO</span>
        <span>FAÇA LOGIN PARA USAR O APLICATIVO</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span>Nome de usuário</span>
          <Input>
            <User />
            <Input.Field placeholder="Exemplo: john123"></Input.Field>
          </Input>
        </div>
        <div className="flex flex-col gap-1">
          <span>Palavra-passe</span>
          <Input>
            <Lock />
            <Input.Field placeholder="********"></Input.Field>
          </Input>
        </div>
      </div>
      <Button variant="primary" onClick={() => <></>}>
        <Button.Title>Iniciar Sessão</Button.Title>
      </Button>

      <a href="/go">teste</a>
    </div>
  );
}

export default Login;
