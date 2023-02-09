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

export async function getClasses(city = "", date = "") {
  const validParams = city.length > 0 && date.length > 0;
  const url = validParams ? `${apiUrl}?ciudad=${city}&fecha=${date}` : apiUrl;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
