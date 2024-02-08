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
		content = <NewProject onAdd={handleAddproject} />
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	}

	function handleAddproject(projectData) {
		setProjectState(
			prevState => {
				const projectid = Math.random()
				const newProject = {
					...projectData,
					id: projectid,
				}
				return {
					...prevState,
					selectedProjectId: undefined,
					projects: [...prevState.projects, newProject],
				}
			}
		)
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
			{content}
		</main>
	)
}

export default App
