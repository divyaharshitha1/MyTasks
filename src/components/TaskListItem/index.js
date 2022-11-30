import './index.css'

const TaskListItem = props => {
  const {taskDetails} = props
  const {taskText, buttonText} = taskDetails
  return (
    <li className="task-item">
      <p className="task-name">{taskText}</p>
      <button className="active-button" type="button">
        {buttonText}
      </button>
    </li>
  )
}

export default TaskListItem
