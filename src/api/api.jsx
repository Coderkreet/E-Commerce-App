// import axios from "axios";

// const API_BASE_URL_1 = "https://dummyjson.com/products";
// const API_BASE_URL_2 = "https://fakestoreapi.com/products";

// // Create an Axios instance (optional)
// const axiosInstance = axios.create({
//   timeout: 15000, // Set timeout (optional)
// });

// // Function to fetch products from DummyJSON
// export const fetchDummyProducts = async () => {
//   try {
//     const response = await axiosInstance.get(API_BASE_URL_1);
//     return response.data.products; // Extracting products array
//   } catch (error) {
//     console.error("Error fetching DummyJSON products:", error);
//     throw error;
//   }
// };

// // Function to fetch products from FakeStoreAPI
// export const fetchFakeStoreProducts = async () => {
//     try {
//       const response = await axiosInstance.get(API_BASE_URL_2);
//       return response.data;
//     } catch (error) {
//       if (error.code === "ECONNABORTED") {
//         console.warn("Request timed out. Retrying...");
//         return await axiosInstance.get(API_BASE_URL_2).then((res) => res.data);
//       }
//       console.error("Error fetching FakeStoreAPI products:", error);
//       throw error;
//     }
//   };
