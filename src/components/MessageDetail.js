import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MessageDetail = ({ messages }) => {
  const { id } = useParams()
  const [message, setMessage] = useState()

  useEffect(() => {
    fetch(`https://minitwitterbackend.herokuapp.com/messages/${id}`)
      .then((res) => res.json())
      .then((data) => setMessage(data))
  }, [id])

  // let message = messages.find((m) => m._id === id)

  return (
    <div className='messageDetail-container'>
      {message && (
        <div>
          {message.text} {message.userId.name}
        </div>
      )}
    </div>
  )
}

export default MessageDetail
