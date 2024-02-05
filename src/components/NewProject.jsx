import { useState } from 'react'
import Input from './Input'

export default function NewProject() {
	return (
		<div>
			<menu>
				<li>
					<button>Cancel</button>
				</li>
				<li>
					<button>Add</button>
				</li>
			</menu>
			<div>
				<Input label="Title" />
				<Input label="Description" isTextArea />
				<Input label="Due Date" />
			</div>
		</div>
	)
}
