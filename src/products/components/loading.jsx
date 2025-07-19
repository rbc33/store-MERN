import { Loader } from 'react-bulma-components'

const Loading = () => {
	return (
		<dir className="columns is-centered">
			<Loader
				style={{
					width: 100,
					height: 100,
				}}
			/>
		</dir>
	)
}

export default Loading
