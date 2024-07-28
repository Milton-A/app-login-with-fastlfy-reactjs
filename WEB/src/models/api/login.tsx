import axios from "axios";

export interface LoginDTO {
  id: string;
  username: string;
}

export interface CreateLoginDTO {
  username: string;
  password: string;
}

const API_URL = "http://localhost:3833/api/user";

export const createLogin = async (
  createData: CreateLoginDTO
): Promise<LoginDTO | null> => {
  try {
    const response = await axios.post(`${API_URL}/login`, createData);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
};

export const createUser = async (
  createData: CreateLoginDTO
): Promise<LoginDTO | null> => {
  try {
    const response = await axios.post(`http://localhost:3833/api/user/create`, {
      username: createData.username,
      password: createData.password,
    });
    return response.data;
  } catch (error) {
    console.error("Error during user creation:", error);
    return null;
  }
};
