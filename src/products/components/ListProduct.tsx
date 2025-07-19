import { Button } from 'react-bulma-components'
import Loading from './Loading'
import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { BASE_URL } from '../../utils/config'

type Product = {
	nombre: string
	descripcion: string
	size: number
	unitaryPrice: number
	imgUrl: string
}
const getProducts = async () => {
	axios({
		url: `${BASE_URL}/products`,
		method: 'GET',
	})
		.then((res) => {
			return res
		})
		.catch((e) => console.log(e))
}
const ListProduct = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [products, setProducts] = useState<Product[] | []>([])

	useEffect(() => {
		const loadProducts = async () => {
			const res = getProducts()
			console.log(res)
			return res
		}
		loadProducts()
	})

	return <>{isLoading ? <Loading /> : 'di cosas'}</>
}
export default ListProduct
