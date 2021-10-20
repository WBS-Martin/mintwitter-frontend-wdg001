import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Messages from './components/Messages';
import MessageDetail from './components/MessageDetail';
import LeftCol from './components/LeftCol';
import RightCol from './components/RightCol';

import './App.css'

const App = () => {
  const [messages, setMessages] = useState([])
  const [activeUser, setActiveUser] = useState()

  useEffect(() => {
    fetch('https://minitwitterbackend.herokuapp.com/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
  }, [])
  useEffect(() => {
    fetch('https://minitwitterbackend.herokuapp.com/me')
      .then((res) => res.json())
      .then((data) => setActiveUser(data))
  }, [])

  const handleSortByDate = () => {
    const sortedArray = [...messages]
    sortedArray.sort((a, b) => b.date.localeCompare(a.date))
    setMessages(sortedArray)
  }

  console.log(messages)

  return (
    <>
      <div className='App'>
        <div className="navbar-wrapper">
          <Navigation activeUser={activeUser} />
        </div>
        <div className="body">
          <div className="left-column">
            <LeftCol />
          </div>
          <Switch>
            <Route path='/messages/:id'>
              <MessageDetail messages={messages} />
            </Route>
            <Route path='/'>
              <Messages messages={messages} handleSortByDate={handleSortByDate} />
            </Route>
          </Switch>
          <div className="right-column">
            <RightCol />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
