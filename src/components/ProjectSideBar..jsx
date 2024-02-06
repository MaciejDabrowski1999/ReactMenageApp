import { useState } from 'react'
import Button from './Button'

export default function ProjectSideBar() {
	return (
		<aside className="w-1/4 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-md">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
			<div>
				<Button>+Add new project</Button>
			</div>
			<ul>...</ul>
		</aside>
	)
}
