import axios, { type AxiosResponse } from 'axios'
import { BASE_URL } from '../../utils/config'

export type Product = {
	nombre: string
	descripcion: string
	size: number
	unitaryPrice: number
	imgUrl: string
}
export const getProducts = async (): Promise<AxiosResponse<Product[]>> => {
	return axios({
		url: `${BASE_URL}/products`,
		method: 'GET',
	})
}
