import { Avatar } from '@material-ui/core'
import React from 'react'
import './CSS/Sidebar.css'
import bg from '../assets/background.jfif'
import avatar from '../assets/avatar.jpg'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img className='sidebar__profileBackground' src={bg} alt="" />
                <Avatar className='sidebar__avatar' src={avatar}/>
                <h2 className='sidebar__avatar__name'>Utkarsh Mishra</h2>
                <h4 className='sidebar__avatar__title'>Copywriting Guru | Trusted By Top Business, Entrepreneurs And Life Coaches</h4>
            </div>
           
            <hr className='horizontalLine'/>
           
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p className='sidebar__stat__name'>Connections</p>
                    <p className='sidebar__stat__value'>2M</p>
                </div>
                <div className="sidebar__stat">
                    <p className='sidebar__stat__name'>Who viewed your profile</p>
                    <p className='sidebar__stat__value'>12M</p>
                </div>
            </div>
            
            <hr className='horizontalLine'/>
            
            <div className="sidebar__bottom">
            <div className="tag">
                <p className='sidebar__stat__tagname'>Recent</p>
                <p className='sidebar__stat__tag'><span className='hashtag'>#</span> theutkarshmishra</p>
                <p className='sidebar__stat__tag'><span className='hashtag'>#</span> themanashmishra</p>
                <p className='sidebar__stat__tag'><span className='hashtag'>#</span> lifecoaching</p>
                <p className='sidebar__stat__tag'><span className='hashtag'>#</span> motivation</p>
            </div>
            </div>
        </div>
    )
}

export default Sidebar