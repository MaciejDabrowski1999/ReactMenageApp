import { useState } from 'react'
import ProjectSideBar from './components/ProjectSideBar.'
import NewProject from './components/NewProject'

function App() {
	const [project, setProject] = useState([])

	// Project object =>
	// const project = [
	// 	{ title: 'something', data: 'date', tasks: [] },
	// 	{ title: 'coś', data: 'ss', tasks: [] },
	// ]

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSideBar />
			<NewProject newProject={setProject} />
		</main>
	)
}

export default App
