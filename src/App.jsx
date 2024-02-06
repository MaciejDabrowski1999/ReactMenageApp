import { useState } from 'react'
import ProjectSideBar from './components/ProjectSideBar.'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected.jsx'

function App() {
	// Project object =>
	// const project = [
	// 	{ title: 'something', data: 'date', tasks: [] },
	// 	{ title: 'coś', data: 'ss', tasks: [] },
	// ]

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSideBar />
			<NoProjectSelected />
		</main>
	)
}

export default App
