import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoginModel from "../models/loginModel";
import { setLocalStorage } from "../service/storage";

const useLoginViewModel = () => {
  const { loginData, createUser, createLogin } = useLoginModel();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigateTo = useNavigate();

  const handleNavigate = useCallback(() => {
    navigateTo("/go");
  }, [navigateTo]);

  const onCreateLoginClick = useCallback(async () => {
    if (!username || !password) {
      console.error("Username and password must be provided.");
      return;
    }
    setIsLoading(true);
    try {
      await createLogin({ username, password });
    } catch (error) {
      console.error("Failed to create login:", error);
    } finally {
      setIsLoading(false);
    }
  }, [username, password, createLogin]);

  const onCreateUser = useCallback(async () => {
    if (!username || !password) {
      console.error("Username and password must be provided.");
      return;
    }
    setIsLoading(true);
    try {
      await createUser({ username, password });
    } catch (error) {
      console.error("Failed to create user:", error);
    } finally {
      setIsLoading(false);
    }
  }, [username, password, createUser]);

  useEffect(() => {
    if (loginData) {
      setLocalStorage("login", loginData);
      handleNavigate();
    }
  }, [loginData, handleNavigate]);

  const onUsernameChange = (element: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(element.target.value);
  };

  const onPasswordChange = (element: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(element.target.value);
  };

  const onDisableButton = useCallback(() => {
    setIsDisabled((prevIsDisabled) => !prevIsDisabled);
  }, []);

  return {
    username,
    onCreateLoginClick,
    handleNavigate,
    loginData,
    onUsernameChange,
    onPasswordChange,
    password,
    onCreateUser,
    isLoading,
    isDisabled,
    onDisableButton,
  };
};

export default useLoginViewModel;
