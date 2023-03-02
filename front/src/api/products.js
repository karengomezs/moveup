import { host } from "../constants";
export const apiUrl = `${host}/producto`;

export async function createProduct(product, token) {
  const url = `${apiUrl}/new/product`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getClass(id) {
  const url = `${apiUrl}/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRecommended() {
  const url = `${apiUrl}/recomendado`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getClassByCategory(id) {
  const url = `${apiUrl}/buscar/categoria/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getClasses() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilteredClasses(
  ciudad = "",
  date = { start: "", end: "" }
) {
  const params = new URLSearchParams({
    ciudad,
    fechaInicial: date.start,
    fechaFinal: date.end,
  }).toString();

  const url = `${apiUrl}?${params}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
