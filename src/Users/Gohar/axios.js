import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.VITE_DB_URL,
	timeout: 2000
})
export default instance;