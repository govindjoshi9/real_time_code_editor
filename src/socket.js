import {io} from 'socket.io-client';

export const initSocket = async ()=>{
  const options ={
    'force new connection' : true,
    reconnectionAttempt: 'Infinity',
    timeout: 10000,
    transports: ['websocker']
  };
  return io(process.env.REACT_APP_BACKENT_URL,options);
}