import { host } from "../constants";
export const apiUrl = `${host}/producto`;

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
    fecha: date.start,
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
