import useLoginModel from "../models/loginModel";

const useLoginViewModel = () => {
  const { loginData, useCreateLogin, useCreateUser } = useLoginModel();

  return {
    loginData,
    useCreateLogin,
    useCreateUser,
  };
};

export default useLoginViewModel;
