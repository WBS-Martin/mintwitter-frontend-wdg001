import './Messages.css'
import { Link } from 'react-router-dom'

const Messages = ({ messages, handleSortByDate }) => {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <div className='messages-container'>
      <button onClick={handleSortByDate}>Sort by date</button>
      {messages &&
        messages.map((message) => (
          <li key={message._id}>
            <Link to={`/messages/${message._id}`}>{`${message.text.substr(
              0,
              60
            )}...`}</Link>
            <span className='message-author'>
              Author: {message.userId.name}
            </span>
            <span className='message-date'>
              Date:{' '}
              {new Date(message.date).toLocaleDateString('de-DE', dateOptions)}
            </span>
          </li>
        ))}
    </div>
  )
}

export default Messages
