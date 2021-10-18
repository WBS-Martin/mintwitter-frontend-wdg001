import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ activeUser }) => {
  return (
    <nav className='navigation-container'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>Users</li>
      <div>
        {activeUser && (
          <div>
            <h3>active user</h3>
            <p>{activeUser[0].name}</p>
            <p>{activeUser[0].email}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
