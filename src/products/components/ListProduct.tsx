import { Button } from 'react-bulma-components'
import Loading from './Loading'
import { useEffect, useState } from 'react'

const ListProduct = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		const timeId = setInterval(() => {
			console.log('useEffect')
			setIsLoading(!isLoading)
		}, 2000)

		return () => clearInterval(timeId)
	})
	useEffect(() => {
		console.log('useEfectOnce')
	}, [isLoading])
	return <>{isLoading ? <Loading /> : 'di cosas'}</>
}
export default ListProduct
