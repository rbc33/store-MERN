import AddButton from './AddButton'
import Header from './Header'
import ProductList from './ProductList'

const ProductLayout = () => {
	return (
		<>
			<Header title="Product app" />
			<AddButton />
			<ProductList />
		</>
	)
}

export default ProductLayout
