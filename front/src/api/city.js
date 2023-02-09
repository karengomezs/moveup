import { host } from "../constants";
export const apiUrl = `${host}/ciudad`;

export async function geCities() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
