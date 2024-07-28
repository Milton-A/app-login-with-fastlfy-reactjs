import React from "react";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { User, Lock } from "lucide-react";
import useLoginViewController from "./useLogin";
const logo = require("../assets/logo.png");

function Login() {
  const {
    handleNavigate,
    loginData,
    onCreateLoginClick,
    onPasswordChange,
    onUsernameChange,
    username,
    password,
  } = useLoginViewController();
  return (
    <div className="flex flex-col  gap-5 h-screen w-screen justify-center items-center text-zinc-100 bg-zinc-900">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="app logo" width={120} />
        <span>SEJA BEM-VINDO</span>
        <span>FAÇA LOGIN PARA USAR O APLICATIVO</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <span>Nome de usuário</span>
          <Input>
            <User />
            <Input.Field
              type="text"
              placeholder="Exemplo: john123"
              value={username}
              onChange={onUsernameChange}
            ></Input.Field>
          </Input>
        </div>
        <div className="flex flex-col gap-1">
          <span>Palavra-passe</span>
          <Input>
            <Lock />
            <Input.Field
              type="password"
              placeholder="********"
              value={password}
              onChange={onPasswordChange}
            ></Input.Field>
          </Input>
        </div>
      </div>
      <Button variant="primary" onClick={onCreateLoginClick}>
        <Button.Title>Iniciar Sessão</Button.Title>
      </Button>
      <span onClick={handleNavigate}>Cria conta</span>
    </div>
  );
}

export default Login;
