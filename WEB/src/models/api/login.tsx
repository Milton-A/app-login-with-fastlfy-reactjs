export interface LoginDTO {
  id: string;
  username: string;
}

export interface CreateLoginDTO {
  username: string;
  password: string;
}

const API_URL = "http:\\192.168.1.20:3833/api/user";

export const createLogin = async (
  createData: CreateLoginDTO
): Promise<LoginDTO | null> => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

export const createUser = async (createData: CreateLoginDTO) => {
  const response = await fetch(`${API_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createData),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.ok;
};
