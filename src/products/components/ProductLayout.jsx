import React from 'react'
import Header from './Header'
import Loading from './loading'
import AddButton from './addButton'

const ProductLayout = () => {
	return (
		<>
			<Header title="Product app" />
			<AddButton />
			<Loading />
		</>
	)
}

export default ProductLayout
