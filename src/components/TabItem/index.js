import './index.css'

const TabItem = props => {
  const {tabsList, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabsList
  const onChangeTabItem = () => {
    updateActiveTabId(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab' : ''
  return (
    <li>
      <button
        type="button"
        className={`tab-item ${activeTabClassName}`}
        onClick={onChangeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
