import { Container, Section } from 'react-bulma-components'

interface HeaderProps {
	title: String
}

const Header = ({ title }: HeaderProps) => {
	return (
		<Section>
			<Container>
				<h1 className="title has-text-centered">{title}</h1>
			</Container>
		</Section>
	)
}
// in js
// import PropTypes from "prop_types"
// Header.PropTypes = {
// 	title.Proptypes.string.isRequired
// }

export default Header
