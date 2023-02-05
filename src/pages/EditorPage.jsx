import React, { useState, useRef, useEffect } from 'react';
import Client from '../components/Client';
import Editor from '../components/Editor';
import { initSocket } from '../socket';
import {useLocation, useNavigate} from 'react-router-dom';
const EditorPage = () => {

  const navigate = useNavigate();
  const location= useLocation();
  const socketRef = useRef(null);
  useEffect(()=>{
    const init = async() =>{
        socketRef.current = await initSocket();
        socketRef.current.emit(ACTIONS.JOIN,{
          roomId,
          username: location.state?.username,
        });
    };
    init();
  },[]);

  const [clients, setClients] = useState([
    {socketId: 1, username: 'Jone1'},
    {socketId: 2, username: 'rakes'},
  ]);
if(!location.state){
  return<Navigato/>
}

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoimage" src="/code-sync.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
            <Client
                key={client.socketId}
                username={client.username}
           />
          ))}
          </div>
        </div>
        <button className="btn copyBtn"> Copy Room ID</button>
        <button className="btn leaveBtn"> Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};
export default EditorPage;
