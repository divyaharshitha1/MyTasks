import './index.css'

const TagItem = props => {
  const {tagDetails, isActive, onChangeOption} = props
  const {displayText, optionId} = tagDetails
  const buttonBgColor = isActive ? `button active` : `button`

  const onClickTag = () => {
    onChangeOption(optionId)
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
