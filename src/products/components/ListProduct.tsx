import { Button } from 'react-bulma-components'
import Loading from './Loading'
import { useEffect, useState } from 'react'

const ListProduct = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		console.log('useEffect')
	})
	return <>{isLoading ? <Loading /> : 'di cosas'}</>
}
export default ListProduct
