import { host } from "../constants";
export const apiUrl = `${host}/reservas`;

export async function createBooking(booking, token) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(booking),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUnavailableDatesByProductId(id) {
  const url = `${apiUrl}/buscar/producto/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
