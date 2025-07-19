import React, { useState } from 'react'
import Header from './Header'
import Loading from './loading'
import AddButton from './addButton'

const ProductLayout = () => {
	const [isLoading, setIsLoading] = useState(true)
	return (
		<>
			<Header title="Product app" />
			<AddButton />
			{isLoading ? <Loading /> : 'mostrar resultados'}
		</>
	)
}

export default ProductLayout
