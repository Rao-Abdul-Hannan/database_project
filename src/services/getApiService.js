import axios from "axios";
import { API_VERSION_1, BASE_URL } from "../constants/urls/urls";

const getApiService = async (endPoint, config = null) => {
	const response = await axios.get(
		`${BASE_URL}${API_VERSION_1}${endPoint}`,
		config
	);
	return response;
};

export default getApiService;
