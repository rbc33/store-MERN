import { useEffect, useState } from 'react'
import { type Product, getProducts } from '../services'
import Loading from './Loading'
import { Container, Section } from 'react-bulma-components'

const ListProduct = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [products, setProducts] = useState<Product[] | null>(null)

	useEffect(() => {
		const loadProducts = async () => {
			const res = await getProducts()
			if (res.status === 200) {
				setProducts(res.data)
			}
			setIsLoading(false)
		}
		loadProducts()
	}, [])
	if (isLoading) return <Loading />
	if (!products)
		return (
			<h2 className="title has-text-cententered">
				You don't have products yet
			</h2>
		)
	return (
		<>
			<Section>
				<Container>
					<h1 className="title has-text-cententered">Products:</h1>
					{products.map((product) => {
						;<>
							<img src={product.imgUrl} />
							<p>name: {product.nombre}</p>
							<p>descrption: {product.descripcion}</p>
							<p>size: {product.size}</p>
							<p>price: {product.unitaryPrice}</p>
						</>
					})}
				</Container>
			</Section>
		</>
	)
}
export default ListProduct
