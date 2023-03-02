import './index.css'

const TagItem = props => {
  const {tagDetails, isActive, onClickTagTab} = props
  const {displayText, optionId} = tagDetails
  const buttonBgColor = isActive ? `button active` : `button`

  const onClickTag = () => {
    onClickTagTab(optionId)
  }

  return (
    <li className="tag-item">
      <button className={buttonBgColor} type="button" onClick={onClickTag}>
        {displayText}
      </button>
    </li>
  )
}

export default TagItem

/* const tagsList = [
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

class TagItem extends Component {
  state = {isActive: false, tasksList: [], activeButton: tagsList.optionId}

  onClickTag = () => {
    const {isActive} = this.state
    this.setState({isActive: !isActive})
  }

  getFilteredTask = () => {
    const {tasksList, activeButton} = this.state
    const fiteredTask = tasksList.filter(
      eachTask => eachTask.displayText === activeButton,
    )
    return filteredTask
  }

  render() {
    const {isActive} = this.state
    const {displayText} = this.props
    const buttonBgColor = isActive ? `button active` : `button`
    const filteredTask = this.getFilteredTask()

    return (
      <ul className="tags-list">
        <li className="tag-item">
          <button
            className={buttonBgColor}
            type="button"
            onClick={this.onClickTag}
          >
            {displayText}
          </button>
          {!isActive && (
            <ul className="tasks-list">
              {filteredTask.map(eachTask => (
                <TaskListItem key={eachTask.optionId} taskDetails={eachTask} />
              ))}
            </ul>
          )}
        </li>
      </ul>
    )
  }
}

export default TagItem */
