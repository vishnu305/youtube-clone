import React,{useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import propic from './vishnu.png'
import './Header.css';
import {Link} from  'react-router-dom';
function Header(){
  const [inputSearch, setinputSearch]=useState('');
  return(<div className="header">
          <div className="header_left">
          <MenuIcon />
          <Link to="/">
          <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Youtube"/>
          </Link>
          </div>
          <div className="header_input">
          <input onChange={e=> setinputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search"/>
          <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_searchicon"/>
          </Link>
          </div>
          <div className="header_icons">
          <VideoCallIcon className="header_icon"/>
          <AppsIcon className="header_icon"/>
          <NotificationsIcon className="header_icon"/>
          <img style={{width:"50px",height:"50px"}} alt="my profile" src={propic}/>
          </div>
    </div>)
}
export default Header;
