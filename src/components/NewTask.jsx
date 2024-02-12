import { useState } from 'react'

export default function NewTask() {
	const [enteredTask, setEnteredTask] = useState()

	function handleEnteredTask(event) {
		setEnteredTask(event.target.value)
		console.log(enteredTask)
	}

	return (
		<div className="flex items-center gap-4 ">
			<input
				onChange={handleEnteredTask}
				type="text"
				className="w-64 px-1 py-1 rounded-sm bg-stone-200"
				value={enteredTask}
			/>
			<button className="text-stone-600 hover:text-stone-950">Add task</button>
		</div>
	)
}
