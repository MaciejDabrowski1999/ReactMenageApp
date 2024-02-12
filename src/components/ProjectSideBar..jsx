import { useState } from 'react'
import Button from './Button'

export default function ProjectSideBar({ onStartAddProject, projects, onSelectProject, SelectedProjectId }) {
	return (
		<aside className="w-1/4 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-md">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
			<div>
				<Button onClick={onStartAddProject}>+Add new project</Button>
			</div>
			<ul className="mt-8">
				{projects.map(project => {
					let cssClass = 'w-full px-2 py-2 hover:bg-stone-800 text-left rounded-sm'

					if (project.id === SelectedProjectId) {
						cssClass += ' bg-stone-800 text-stone-200'
					} else {
						cssClass += ' text-stone-400'
					}

					return (
						<li key={project.id}>
							<button onClick={() => onSelectProject(project.id)} className={cssClass}>
								{project.title}
							</button>
						</li>
					)
				})}
			</ul>
		</aside>
	)
}
