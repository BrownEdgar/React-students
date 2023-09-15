import axios from "axios";
console.log(`import.meta.VITE_DB_URL: `, import.meta.VITE_DB_URL)
const instance = axios.create({
  baseURL: import.meta.VITE_DB_URL,
  timeout: 2000
})
export default instance;