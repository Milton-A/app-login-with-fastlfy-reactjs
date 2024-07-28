import { useCallback, useState } from "react";
import { CreateLoginDTO, LoginDTO } from "./api/login";
import {
  createLogin as apiCreateLogin,
  createUser as apiCreateUser,
} from "./api/login";

export default function useLoginModel() {
  const [loginData, setLogin] = useState<LoginDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const createLogin = useCallback(async (createData: CreateLoginDTO) => {
    setLoading(true);
    try {
      const response = await apiCreateLogin(createData);
      if (response) {
        setLogin(response);
      }
    } catch (error) {
      console.error("Failed to create login:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(async (createData: CreateLoginDTO) => {
    setLoading(true);
    try {
      const response = await apiCreateUser(createData);
      if (response) {
        setLogin(response);
      }
    } catch (error) {
      console.error("Failed to create user:", error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loginData,
    loading,
    createLogin,
    createUser,
  };
}
