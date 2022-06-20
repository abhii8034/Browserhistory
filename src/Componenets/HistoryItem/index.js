import './index.css'

const HistoryItem = props => {
  const {browserHistoryDetails, deleteHistory} = props
  const {logoUrl, domainUrl, title, timeAccessed, id} = browserHistoryDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list-container">
      <div className="browser-start">
        <p className="browser-time">{timeAccessed}</p>
        <div className="browser-middle">
          <img src={logoUrl} alt="domain logo" className="destination-image" />
          <p className="browser-title">{title}</p>
          <p className="name">{domainUrl}</p>
        </div>
      </div>
      <div className="browser-end">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteHistory}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
