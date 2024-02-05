import { useState } from 'react'
import ProjectSideBar from './components/ProjectSideBar.'
import ProjectInputs from './components/ProjectInputs'

function App() {
	const [project, setProject] = useState([])

	// Project object =>
	// const project = [
	// 	{ title: 'something', data: 'date', tasks: [] },
	// 	{ title: 'coś', data: 'ss', tasks: [] },
	// ]

	return (
		<main>
			<h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
			<ProjectSideBar />
			<ProjectInputs newProject={setProject} />
		</main>
	)
}

export default App
