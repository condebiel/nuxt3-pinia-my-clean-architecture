import axios from 'axios'

const ENDPOINT = 'http://localhost:8080'

const axiosFactory = (baseURL: string) => {
	return axios.create({
		baseURL,
		timeout: 30000,
	})
}

const APIAxios = axiosFactory(ENDPOINT)

export { APIAxios }
