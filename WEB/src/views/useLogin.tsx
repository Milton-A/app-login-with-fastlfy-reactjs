import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoginViewModel from "../viewModels/useLoginViewModel";

function useLoginViewController() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const { loginData, useCreateLogin, useCreateUser } = useLoginViewModel();

  const onCreateLoginClick = useCallback(async () => {
    if (loginData) {
      navigateTo("/go");
    }
  }, [useCreateLogin, username, password]);

  const onCresteUser = useCallback(async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useCreateUser({ username, password });
  }, [useCreateUser, username, password]);

  const handleNavigate = async () => {
    await navigateTo("/go");
  };

  const onUsernameChange = (element: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(element.target.value);
  };
  const onPasswordChange = (element: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(element.target.value);
  };

  return {
    username,
    onCreateLoginClick,
    handleNavigate,
    loginData,
    onUsernameChange,
    onPasswordChange,
    password,
    onCresteUser,
  };
}

export default useLoginViewController;
