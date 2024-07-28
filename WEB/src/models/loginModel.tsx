import { useCallback, useState } from "react";
import { CreateLoginDTO, LoginDTO } from "./api/login";
import { createLogin, createUser } from "./api/login";

export default function useLoginModel() {
  const [loginData, setLogin] = useState<LoginDTO | null>(null);

  const useCreateLogin = useCallback(async (createData: CreateLoginDTO) => {
    const response = await createLogin(createData);

    if (response !== null) {
      setLogin(response);
    }
  }, []);

  const useCreateUser = useCallback(async (createData: CreateLoginDTO) => {
    const response = await createUser(createData);
    if (response !== null) {
      return response;
    }
  }, []);

  return {
    loginData,
    useCreateLogin,
    useCreateUser,
  };
}
