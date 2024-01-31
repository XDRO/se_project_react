import { baseUrl } from "./api";

export const register = async ({ name, email, password, avatar }) => {
  try {
    const res = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, avatar }),
    });

    const userData = await res.json();
    console.log("Full response from server:", res);
    console.log("User data received after registration:", userData);

    if (!userData) {
      throw new Error("Error from register");
    }

    return userData;
  } catch (error) {
    console.error("Error from register: ", error);
    throw error;
  }
};

// project 14 login
export const authorize = async (email, password) => {
  const res = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const userData = await res.json();

  if (userData.token) {
    localStorage.setItem("token", userData.token);
    return userData.token;
  } else {
    throw new Error("Error from authorize: ", userData);
  }
};

export const checkToken = async () => {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    try {
      const res = await fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      });

      const userData = await res.json();

      if (userData.data) {
        return userData.data;
      } else {
        throw new Error("Invalid token");
      }
    } catch (error) {
      console.error("Error while checking token: ", error);
      throw error;
    }
  } else {
    throw new Error("Token not found");
  }
};
