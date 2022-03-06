import React from 'react'
import './CSS/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import logo from "../assets/linkedin-logo.png";
import Header_Icons from './HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import avatar from '../assets/avatar.jpg'


function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={logo} alt="" />

            <div className="header__search">
                <SearchIcon/>
                <input type="text" name="" id="" placeholder='Search' />
            </div>
        </div>

        <div className="header__right">
            <Header_Icons Icon={HomeIcon} title={"Home"}/>
            <Header_Icons Icon={SupervisorAccountIcon} title={"My Network"}/>
            <Header_Icons Icon={BusinessCenterIcon} title={"Jobs"}/>
            <Header_Icons Icon={ChatIcon} title={"Messaging"}/>
            <Header_Icons Icon={NotificationsIcon} title={"Notifications"}/>
            <Header_Icons avatar={avatar} title={"Me"}/>
        </div>
    </div>
  )
}

export default Header