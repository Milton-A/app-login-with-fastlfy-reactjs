const setLocalStorage = async (local: string, data: {}) => {
  await localStorage.setItem(local, JSON.stringify(data));
};

const getLocalStorage = async (local: string) => {
  try {
    const data = localStorage.getItem(local);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return null;
  }
};

export { getLocalStorage, setLocalStorage };
