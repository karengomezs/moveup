import { host } from "../constants";
export const apiUrl = `${host}/categorias`;

export async function getCategories() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
