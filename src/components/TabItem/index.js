import './index.css'

const TabItem = props => {
  const {tabItems, specificTab, isActive} = props
  const {tabId, displayText} = tabItems

  const addSpecificSty = isActive ? 'UnderScore' : null

  const sendSpecificTab = () => {
    specificTab(tabId)
  }

  return (
    <div className={`eachList-con ${addSpecificSty}`}>
      <li className="eachList-sty">
        <button type="button" className="btn-sty" onClick={sendSpecificTab}>
          <p className="tab-title">{displayText}</p>
        </button>
      </li>
    </div>
  )
}

export default TabItem
