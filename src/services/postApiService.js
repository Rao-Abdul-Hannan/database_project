import axios from "axios";
import { API_VERSION_1, BASE_URL } from "../constants/urls/urls";

const postApiService = async (endPoint, formData1, config = null) => {
	const response = await axios.post(
		`${BASE_URL}${API_VERSION_1}${endPoint}`,
		formData1,
		config
	);
	return response;
};

export default postApiService;
