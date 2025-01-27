import axios from "axios";

// export async function FetchData(setData) {
//   try {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const res = await data.json();
//     setData(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function FetchData(setData) {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");
    setData(products.data);
  } catch (error) {
    console.log(error);
  }
}
