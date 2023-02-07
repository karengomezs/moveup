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

// localhost:8080/api/products?city="medellin"&date="20/08/2020"
export async function getClasses(city, date) {
  // const url = `${apiUrl}/products?city=${city}&date=${date}`;
  try {
    // const response = await fetch(url)
    // const data = await response.json()
    console.log(city, date);
    const results = allProducts.filter((product) => {
      if (!city) {
        return product;
      }
      return product.ubicacionClase === city;
    });
    return Promise.resolve(results);
  } catch (error) {
    console.log(error);
  }
}
