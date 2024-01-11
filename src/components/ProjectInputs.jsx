import { useState } from 'react'

export default function ProjectInputs() {
	return (
		<section>
			<h2>New Project</h2>
			<label>Title of Your project</label>
			<input type="text" />
			<label>End of Your project</label>
			<input type="date" />
			<label>Description of Your project</label>
			<input type="text" />
			<label>Tasks of Your project</label>
			<input type="text" />
		</section>
	)
}
