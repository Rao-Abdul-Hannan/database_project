import axios from "axios";
import { API_VERSION_1, BASE_URL } from "../constants/urls/urls";

const deleteApiService = async (endPoint) => {
	const response = await axios.delete(
		`${BASE_URL}${API_VERSION_1}${endPoint}`
	);
	return response;
};

export default deleteApiService;