import { Card, Columns, Content, Heading } from 'react-bulma-components'
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
		<Columns className="is-multiline">
			{products.map((product) => (
				<Columns.Column
					key={product._id}
					size="one-third"
					className="is-4-desktop is-6-tablet"
				>
					<Card>
						<Card.Image size="16by9" src={product.imgUrl} />
						<Card.Content>
							<Content>
								<Heading>{product.name}</Heading>
								<Heading subtitle size={6}>
									{product.description}
								</Heading>
								<Heading subtitle size={6}>
									Size: {product.size}
								</Heading>
								<Heading subtitle size={6}>
									Price: {product.unitaryPrice}€
								</Heading>
							</Content>
						</Card.Content>
					</Card>
				</Columns.Column>
			))}
		</Columns>
	)
}
export default ListProduct
