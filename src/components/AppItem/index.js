import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {imageUrl, appName} = appsList
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
