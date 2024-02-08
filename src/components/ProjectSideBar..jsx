import { useState } from 'react'
import Button from './Button'

export default function ProjectSideBar({ onStartAddProject, projects }) {
	return (
		<aside className="w-1/4 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-md">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
			<div>
				<Button onClick={onStartAddProject}>+Add new project</Button>
			</div>
			<ul className="mt-8">
				{projects.map(project => (
					<li key={project.id}>
						<button className="w-full px-2 py-2 text-stone-400 hover:bg-stone-800 text-left rounded-sm">
							{project.title}
						</button>
					</li>
				))}
			</ul>
		</aside>	
	)
}
