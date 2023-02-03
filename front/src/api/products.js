import allProducts from "./datos.json";
export const host = "http://localhost:8080/api";
export const apiUrl = `${host}/product`;

export async function getClass(id) {
  // const url = `${apiUrl}/${id}`;
  try {
    // const response = await fetch(url)
    // const data = await response.json()

    const obj = allProducts.find((product) => {
      return product.id === parseInt(id);
    });

    return Promise.resolve(obj);
  } catch (error) {
    console.log(error);
  }
}
