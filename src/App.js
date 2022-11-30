import {Component} from 'react'
import {v4} from 'uuid'
import TagItem from './components/TagItem'
import TaskListItem from './components/TaskListItem'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    taskInput: '',
    tasksList: [],
    activeButtonId: tagsList[0].optionId,
    changeOption: tagsList.optionId,
  }

  onChangeTask = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({activeButtonId: event.target.value})
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {taskInput, activeButtonId} = this.state
    const newData = {
      id: v4(),
      taskText: taskInput,
      buttonText: activeButtonId,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newData],
      taskInput: '',
      activeButtonId: tagsList.optionId,
    }))
  }

  getTask = () => {
    const {changeOption, tasksList} = this.state
    const filterTask = tasksList.filter(
      eachTask => eachTask.optionId === changeOption,
    )
    return filterTask
  }

  onChangeOption = optionId => {
    this.setState({changeOption: optionId})
  }

  render() {
    const {taskInput, activeButtonId, tasksList, changeOption} = this.state
    const filterTask = this.getTask()

    return (
      <div className="app-container">
        <div className="task-container">
          <h1 className="task-heading">Create a Task</h1>
          <form className="form-control" onSubmit={this.onSubmitTask}>
            <div className="input-container">
              <label htmlFor="task" className="label-ele">
                Task
              </label>
              <input
                id="task"
                className="input-element"
                type="text"
                placeholder="Enter the task here"
                onChange={this.onChangeTask}
                value={taskInput}
              />
            </div>
            <label htmlFor="tags" className="label-ele">
              Tags
            </label>
            <div>
              <select
                className="select-container"
                id="tags"
                value={activeButtonId}
                onChange={this.onChangeSelect}
              >
                {tagsList.map(eachTag => (
                  <option key={eachTag.optionId} value={eachTag.optionId}>
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
            <div className="button-container">
              <button className="add-btn" type="submit">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <div className="tags-container">
          <h1 className="tag-heading">Tags</h1>
          <ul className="tags-list">
            {tagsList.map(eachBtn => (
              <TagItem
                key={eachBtn.optionId}
                tagDetails={eachBtn}
                isActive={eachBtn.optionId === changeOption}
                onChangeOption={this.onChangeOption}
              />
            ))}
          </ul>
          <h1 className="tag-heading">Tasks</h1>
          {tasksList.length > 0 ? (
            <ul className="tasks-list">
              {filterTask.map(eachTask => (
                <TaskListItem key={eachTask.optionId} taskDetails={eachTask} />
              ))}
            </ul>
          ) : (
            <p className="error-msg">No Tasks Added Yet</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
