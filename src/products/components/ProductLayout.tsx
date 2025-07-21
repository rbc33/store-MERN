import { useEffect, useState } from 'react'
import { Button, Container, Modal } from 'react-bulma-components'
import AddButton from './AddButton'
import Header from './Header'
import ListProduct from './ListProduct'
import Form from './Form'
import { getProducts, PostProduct, Product, saveProduct } from '../services'
import Loading from './Loading'

const ProductLayout = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [products, setProducts] = useState<Product[] | []>([])
	const loadProducts = async () => {
		const res = await getProducts()
		if (res.status === 200) {
			setProducts(res.data)
		}
		setIsLoading(false)
	}
	useEffect(() => {
		loadProducts()
	}, [])
	const handleSubmit = async (data: PostProduct) => {
		await saveProduct(data)
		loadProducts()
		setIsModalOpen(false)
	}
	return (
		<Container>
			<Header title="Product app" />
			<AddButton onClick={() => setIsModalOpen(true)} />
			{!isLoading && !products.length && (
				<h2 className="title has-text-cententered">
					You don't have products yet
				</h2>
			)}
			{!isLoading && <ListProduct products={products} />}
			{isLoading && <Loading />}
			<Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<Modal.Card>
					<Modal.Card.Header>
						<Modal.Card.Title>Add Product</Modal.Card.Title>
					</Modal.Card.Header>
					<Modal.Card.Body>
						<Form handleSubmit={handleSubmit} />
						<Button
							className="is-pulled-left"
							color="secundary"
							onClick={() => setIsModalOpen(false)}
						>
							Cancel
						</Button>
					</Modal.Card.Body>
				</Modal.Card>
			</Modal>
		</Container>
	)
}

export default ProductLayout
