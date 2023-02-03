import React, { useState } from 'react'
import {v4 as uuid4} from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Home=()=>{
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [username, setusername] = useState('');
  const createNewRoom = (e)=>{
    e.preventDefault();
    const id = uuid4();
    setRoomId(id);
    toast.success('Created a new room');
    
  }
  const joinRoom = ()=>{
    if(!roomId || !username){
      toast.error('Room ID and user name is required');
      return;
    }
    navigate(`/editor/${roomId}`,{
      state: {
        username,
      },
    });
     
  
    
  };
  return(
    
     <div className="HomePageWrapper">
       <div className='formWrapper'>
        <img className="homePageLogo" src="/code-sync.png" alt="code-sync-logo"/>
        <h4 className="mainlable">Paste invitation Room Id</h4>
        <div className="inputGroup">
          <input 
          type="text"
           className='inputBox'
            placeholder="RoomID" 
            onChange={(e)=>setRoomId(e.target.value)}
             value={roomId} 
             
             />
          <input
           type="text" 
           className='inputBox' 
           placeholder="UserName" 
           onChange={(e)=>setusername(e.target.value)} 
           value={username} 
           
           />
          <button className='btn joinBtn' onClick={joinRoom}>Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">New room</a>
          </span>
        </div>
       </div>
       <div className="FooterWrapper">

       </div>
       <footer>
      <h4>
        Build by <a href="https://github.com/govindjoshi9">Govind</a>
      </h4>
       </footer>
     </div>
    
  )
};
export default Home;