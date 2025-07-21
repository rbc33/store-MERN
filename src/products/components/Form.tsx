import { useRef, useState } from 'react'
import { PostProduct } from '../services'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
	name: z.string().min(1, { message: 'Enter the name' }),
	unitaryPrice: z.string().min(1, { message: 'Enter the price' }),
	description: z.string().min(1, { message: 'Enter a description' }),
	size: z.string().min(1, { message: 'Enter a size' }),
	image: z
		.instanceof(FileList)
		.refine((files) => files.length === 1, { message: 'Image is required' })
		.refine(
			(files) =>
				[
					'image/png',
					'image/jpeg',
					'image/jpg',
					'image/svg+xml',
					'image/gif',
				].includes(files[0]?.type),
			{ message: 'Invalid image file type' }
		),
})

type ProductForm = z.infer<typeof formSchema>

interface FormProps {
	handleSubmit: (data: PostProduct) => void
}

const Form = ({ handleSubmit }: FormProps) => {
	const [fileName, setFileName] = useState('Image')
	const inputFileRef = useRef<HTMLInputElement>(null)

	const {
		register,
		handleSubmit: rhfHandleSubmit,
		formState: { errors },
	} = useForm<ProductForm>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit: SubmitHandler<ProductForm> = (data) => {
		handleSubmit({
			...data,
			image: data.image[0],
		})
	}

	const handleFileChange = () => {
		setFileName(inputFileRef.current?.files?.[0]?.name ?? 'Image')
	}

	return (
		<form onSubmit={rhfHandleSubmit(onSubmit)}>
			<div className="field">
				<label className="label">Name</label>
				<div className="control">
					<input
						className={`input ${errors.name ? 'is-danger' : ''}`}
						type="text"
						placeholder="Enter name"
						{...register('name')}
					/>
				</div>
				{errors.name && <p className="help is-danger">{errors.name.message}</p>}
			</div>

			<div className="field">
				<label className="label">Size</label>
				<div className="control">
					<input
						className={`input ${errors.size ? 'is-danger' : ''}`}
						type="text"
						placeholder="Enter size"
						{...register('size')}
					/>
				</div>
				{errors.size && <p className="help is-danger">{errors.size.message}</p>}
			</div>

			<div className="field">
				<label className="label">Description</label>
				<div className="control">
					<textarea
						className={`textarea ${errors.description ? 'is-danger' : ''}`}
						placeholder="Enter description"
						{...register('description')}
					/>
				</div>
				{errors.description && (
					<p className="help is-danger">{errors.description.message}</p>
				)}
			</div>

			<div className="field">
				<label className="label">Price</label>
				<div className="control">
					<input
						className={`input ${errors.unitaryPrice ? 'is-danger' : ''}`}
						type="number"
						placeholder="Enter price"
						{...register('unitaryPrice', { valueAsNumber: true })}
					/>
				</div>
				{errors.unitaryPrice && (
					<p className="help is-danger">{errors.unitaryPrice.message}</p>
				)}
			</div>

			<div className="field">
				<label className="label">Image</label>
				<div className="control">
					<div className="file has-name is-right">
						<label className="file-label">
							<input
								className={`file-input ${errors.image ? 'is-danger' : ''}`}
								type="file"
								{...register('image')}
								ref={(e) => {
									register('image').ref(e)
									inputFileRef.current = e
								}}
								onChange={(e) => {
									handleFileChange()
									register('image').onChange(e)
								}}
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
				{errors.image && (
					<p className="help is-danger">{errors.image.message}</p>
				)}
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
