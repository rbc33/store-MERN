import { Container, Section } from 'react-bulma-components'
import { type Product } from '../services'

interface ListProductProps {
	products: Product[] | null
}

const ListProduct = ({ products }: ListProductProps) => {
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
							<p>name: {product.name}</p>
							<p>descrption: {product.description}</p>
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
