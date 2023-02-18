import { host } from "../constants";
export const apiUrl = `${host}/auth/register`;

export async function signApi(name, lastName, email, password) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: name,
        apellido: lastName,
        email,
        contraseña: password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

/* function fakeResponse(name, lastName, email, password) {
  const fakeUser = {
    user: {
      id: 1,
      name,
      lastName,
      email,
    },
    token: "msms",
  }; */

/*   return Promise.resolve(fakeUser);
} */
