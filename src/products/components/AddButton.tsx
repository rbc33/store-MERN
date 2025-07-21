import { Button, Container, Section } from 'react-bulma-components'

interface addButtonProps {
	onClick: () => void
}

const AddButton = ({ onClick }: addButtonProps) => {
	return (
		<Section>
			<Container>
				<div className="is-pulled-right">
					<Button onClick={onClick} color="primary">
						Add
					</Button>
				</div>
			</Container>
		</Section>
	)
}

export default AddButton
