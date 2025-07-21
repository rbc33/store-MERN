import { useRef, useState } from 'react'
import { PostProduct } from '../services'
interface FormProps {
	handleSubmit: (data: PostProduct) => void
}
const Form = ({ handleSubmit }: FormProps) => {
	const [fileName, setFileName] = useState('Image')
	const inputFileRef = useRef<HTMLInputElement>(null)

	const handleFileChange = () => {
		setFileName(inputFileRef.current?.files?.[0]?.name ?? 'Image')
	}

	const [formValues, setFormValues] = useState({
		name: '',
		unitaryPrice: '',
		description: '',
		size: '',
	})
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleSubmit({
			...formValues,
			image:
				inputFileRef.current && inputFileRef.current.files
					? inputFileRef.current.files[0]
					: undefined,
		})
		console.log('Form values:', formValues)
		console.log(inputFileRef.current?.files)
	}
	return (
		<form onSubmit={_handleSubmit}>
			<div className="field">
				<label className="label">Name</label>
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="Enter name"
						name="name"
						value={formValues.name}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label">Size</label>
				<div className="control">
					<input
						className="input"
						type="number"
						placeholder="Enter size"
						name="size"
						value={formValues.size}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label">Description</label>
				<div className="control">
					<textarea
						className="textarea"
						placeholder="Enter description"
						name="description"
						value={formValues.description}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label">Price</label>
				<div className="control">
					<input
						className="input"
						type="number"
						placeholder="Enter price"
						name="unitaryPrice"
						value={formValues.unitaryPrice}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label">Image</label>
				<div className="control">
					<div className="file has-name is-right">
						<label className="file-label">
							<input
								className="file-input"
								type="file"
								name="image"
								ref={inputFileRef}
								onChange={handleFileChange}
							/>
							<span className="file-cta">
								<span className="file-icon">
									<i className="fas fa-upload" color="white"></i>
								</span>
								<span className="file-label">Choose a file…</span>
							</span>
							<span className="file-name">{fileName}</span>
						</label>
					</div>
				</div>
			</div>
			<div className="field">
				<div className="control">
					<button type="submit" className="button is-primary is-pulled-right">
						Submit
					</button>
				</div>
			</div>
		</form>
	)
}

export default Form
