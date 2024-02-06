import { useState } from 'react'
import ProjectSideBar from './components/ProjectSideBar.'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected.jsx'

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
	})

	function handleStartAddProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			}
		})
	}
	let content

	if (projectState.selectedProjectId === null) {
		content = <NewProject />
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	}

	function onAdd(projectData) {
		setProjectState(
			...prevState => {
				const newProject = {
					...projectData,
					id: Math.random(),
				}
				return {
					...prevState,
					projects: [...prevState.projects, newProject],
				}
			}
		)
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSideBar onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	)
}

export default App
