import './index.css'

const EventItem = props => {
  const {eventDetails, selectActiveEventId, isActivate} = props
  const {id, imageUrl, name, location} = eventDetails

  const selectEventClassName = isActivate ? 'is-active' : ''

  const onClickEvent = () => {
    selectActiveEventId(id)
  }

  return (
    <li className="event-item-container">
      <button
        className="event-click-button"
        type="button"
        onClick={onClickEvent}
      >
        <img
          className={`event-image ${selectEventClassName}`}
          src={imageUrl}
          alt="event"
        />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
