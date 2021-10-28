import './Messages.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Messages = ({ messages, handleSortByDate }) => {
  const [userInput, setUserInput] = useState()
  const [filteredMessages, setFilteredMessages] = useState()

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const filteredArray = messages.filter((message) =>
      message.text.toLowerCase().includes(userInput.toLowerCase())
    )
    setFilteredMessages(filteredArray)
  }

  const clearFilter = () => {
    setFilteredMessages(undefined)
  }

  const dataToShow = filteredMessages ? filteredMessages : messages

  return (
    <div className='messages-container'>
      <button className='sort-btn' onClick={handleSortByDate}>
        Sort by date
      </button>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='search'
          onChange={(e) => setUserInput(e.target.value)}></input>
        <input type='submit'></input>
      </form>
      {filteredMessages && (
        <div>
          <p onClick={clearFilter}>clear filter</p>
        </div>
      )}
      {dataToShow.map((message) => (
        <li key={message._id}>
          <Link to={`/messages/${message._id}`}>{`${message.text.substr(
            0,
            60
          )}...`}</Link>
          <span className='message-author'>Author: {message.userId.name}</span>
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
