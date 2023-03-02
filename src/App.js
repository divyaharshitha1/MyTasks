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
    activeTagId: '',
    selectTag: 'HEALTH',
    activeTab: false,
  }

  onChangeTask = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({selectTag: event.target.value})
  }

  onClickTagTab = id => {
    const {activeTagId} = this.state

    if (activeTagId === id) {
      this.setState(prevState => ({activeTab: !prevState.activeTab}))
    } else {
      this.setState({activeTab: true, activeTagId: id})
    }
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {taskInput, selectTag} = this.state
    const newData = {
      id: v4(),
      taskText: taskInput,
      buttonText: selectTag,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newData],
      taskInput: '',
      selectTag: 'HEALTH',
    }))
  }

  render() {
    const {taskInput, selectTag, tasksList, activeTab, activeTagId} = this.state

    let updatedTasksList = tasksList

    if (activeTab) {
      const filteredTask = tasksList.filter(
        eachTask => eachTask.buttonText === activeTagId,
      )
      updatedTasksList = filteredTask
    }

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
                value={selectTag}
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
                isActive={
                  eachBtn.optionId === activeTagId && activeTab === true
                }
                onClickTagTab={this.onClickTagTab}
              />
            ))}
          </ul>
          <h1 className="tag-heading">Tasks</h1>
          {updatedTasksList.length > 0 ? (
            <ul className="tasks-list">
              {updatedTasksList.map(eachTask => (
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

/*            {tasksList.length > 0 ? (
            <ul className="tasks-list">
              {tasksList.map(eachTask => (
                <TaskListItem key={eachTask.optionId} taskDetails={eachTask} />
              ))}
            </ul>
          ) : (
            <p className="error-msg">No Tasks Added Yet</p>
          )} */
