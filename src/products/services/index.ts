import axios, { type AxiosResponse } from 'axios'
import { BASE_URL } from '../../utils/config'

export type Product = {
	name: string
	description: string
	size: number | string
	unitaryPrice: number | string
	imgUrl: string
}
export interface PostProduct {
	name: string
	description: string
	size: string
	unitaryPrice: string
	image?: File
}
export const getProducts = async (): Promise<AxiosResponse<Product[]>> => {
	return axios({
		url: `${BASE_URL}/products`,
		method: 'GET',
	})
}
export const saveProduct = async (
	productData: PostProduct
): Promise<AxiosResponse> => {
	const formData = new FormData()
	formData.append('name', productData.name)
	formData.append('desciption', productData.description)
	formData.append('size', productData.size)
	formData.append('unitaryPrice', productData.unitaryPrice)
	formData.append('image', productData.image!)
	return axios({
		url: `${BASE_URL}/products`,
		method: 'POST',
		data: formData,
	})
}
