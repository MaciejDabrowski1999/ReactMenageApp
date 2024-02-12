import { useState } from 'react'
import ProjectSideBar from './components/ProjectSideBar.'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected.jsx'
import SelectedProject from './components/SelectedProject.jsx'

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
	})

	function handleSelectedProject(id) {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: id,
			}
		})
	}

	function handleStartAddProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			}
		})
	}

	function handleCloseProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
			}
		})
	}

	function handleDeletedProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [prevState.projects.filter(project => project.id !== prevState.selectedProjectId)],
			}
		})
	}

	const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

	let content = <SelectedProject project={selectedProject} onDelete={handleDeletedProject} />

	if (projectState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddproject} onCancel={handleCloseProject} />
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	}

	function handleAddproject(projectData) {
		setProjectState(prevState => {
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
		})
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectSideBar
				onStartAddProject={handleStartAddProject}
				projects={projectState.projects}
				onSelectProject={handleSelectedProject}
			/>
			{content}
		</main>
	)
}

export default App
