import './index.css'

const AppItem = props => {
  const {tabsLists} = props
  const {appName, imageUrl} = tabsLists

  return (
    <div className="each-list-con">
      <li className="AppItem-sty">
        <img className="appImg-sty" src={imageUrl} alt={appName} />
        <p className="appName-sty">{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
