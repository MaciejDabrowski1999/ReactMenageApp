import { useState } from 'react'
import ProjectItem from './ProjectItem'

export default function Tab() {
	return (
		<aside>
			<h2>Your Projects</h2>
			<div>
				<button>+Add project</button>
			</div>
			<ul>
				<ProjectItem />
			</ul>
		</aside>
	)
}
