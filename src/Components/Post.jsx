import React from 'react'
import './CSS/Post.css'
import { Avatar } from '@material-ui/core'
import InputOption from './InputOption'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({name, description, message, photoUrl}) {
  return (
    <div className="post">
        <div className="post__header">
            <Avatar src={photoUrl}/>
            <div className="post__info">
                <h2 className='postInfo__name'>{name}</h2>
                <p className='postInfo__title'>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <hr className='horizontalLine'/>

        <div className="post__button">
            <InputOption Icon={ThumbUpAltIcon} title="Like" color="#666666"/>
            <InputOption Icon={ChatIcon} title="Comment" color="#666666"/>
            <InputOption Icon={ShareIcon} title="Share" color="#666666"/>
            <InputOption Icon={SendIcon} title="Send" color="#666666"/>
        </div>
    </div>
  )
}

export default Post