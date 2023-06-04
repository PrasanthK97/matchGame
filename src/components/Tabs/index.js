const Tabs = props => {
  const {tabSelect, tabItem} = props
  const {tabId, displayText} = tabItem

  const onClickButton = () => {
    tabSelect(tabId)
  }

  return (
    <div>
      <button type="button" onClick={onClickButton}>
        {displayText}
      </button>
    </div>
  )
}

export default Tabs
