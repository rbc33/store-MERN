import { Button } from 'react-bulma-components'
import Loading from './Loading'
import { useState } from 'react'

const ProductList = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	return (
		<>
			<Button
				onClick={() => {
					setIsLoading(!isLoading)
				}}
			/>

			{isLoading ? <Loading /> : 'di cosas'}
		</>
	)
}
export default ProductList
