import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ activeUser }) => {
  return (
    <nav className='navigation-container'>
      <ul className="navbar-list">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Users</li>
      </ul>
      <div>
      {activeUser && (
        <div className="user-display">
          <div className="user-avatar">AU</div>
          <div  className="user-name">
            <p>{activeUser[0].name}</p>
            <p>{activeUser[0].email}</p>
          </div>
        </div>
      )}
      </div>
    </nav>
  )
}

export default Navigation
