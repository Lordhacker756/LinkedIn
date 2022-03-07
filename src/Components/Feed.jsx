import React, {useState, useEffect} from 'react'
import './CSS/Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import DescriptionIcon from '@material-ui/icons/Description';
import Post from './Post';
//import photoUrl from '../assets/avatar.jpg'
//import { PostAddSharp } from '@material-ui/icons';
import firebase from 'firebase/compat/app'
import { db } from '../firebase'


function Feed() {
const [input, setInput] = useState("")
const [posts, setPosts] = useState([])
const sendPost = e =>
{
  e.preventDefault();
  db.collection('posts').add({
    name: 'Utkarsh Mishra',
    description: 'Copywriting Guru | Trusted By Top Business, Entrepreneurs And Life Coaches',
    message: input,
    photoUrl:'https://media-exp1.licdn.com/dms/image/C5603AQEZqUQob7Km2Q/profile-displayphoto-shrink_100_100/0/1642701143784?e=1652313600&v=beta&t=Jt-_5w-hBDlaAY8ErEA2r8GtBrgtJQT15naCWMGKrMs',
    timeStamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput("");
}

// Configuring the database
useEffect(() => {
db.collection("posts").orderBy("timeStamp","desc").onSnapshot((snapshot) => //snapshot is a real time event listner of javascript
setPosts(
  snapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }))
)
);
},[]);


  return (
    <div className="feed">
        {/* Input Area */}
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon className='inputIcon'/>
                <form action=""> {/* Using form tag enables us to process the data */}
                     <input className='post__input' type="text" value={input} onChange={e=> setInput(e.target.value)} placeholder='Start a post'/>
                     <button className='submit_btn' type="submit" onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                <InputOption Icon={YouTubeIcon} title="Video" color="#7FC15E"/>
                <InputOption Icon={EventIcon} title="Event" color="#E7A33E"/>
                <InputOption Icon={DescriptionIcon} title="Write an article" color="#FC9295"/>
            </div>
        </div>

        {/* Post Area */}
        {posts.map(({ id, data:{ name, description, message, photoUrl}})=>{
          return <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
        })}
    </div>
  )
}

export default Feed