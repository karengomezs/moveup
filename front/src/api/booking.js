import { host } from "../constants";
export const apiUrl = `${host}/reservas`;

export async function getBookingsByUserId(id, token) {
  //localhost:8080/api/reservas?usuarioId=2
  const url = `${apiUrl}?usuarioId=${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

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

export async function getUnavailableDatesByProductId(id, token) {
  const url = `${apiUrl}/buscar/producto/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
