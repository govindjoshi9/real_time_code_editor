import React, { useEffect } from 'react'
// import codemirror from 'codemirror';

const Editor =()=>{
  useEffect(()=>{
    async function init(){
      codemirror.formTextArea(document.getElementById("realtimeEditor"),{
          mode : {name: 'javascript', Json: true},
          theme: 'dracula',
          autoCloseTag: true,
          autoCloseBrackets: true,
          lineNumbers: true,
      });
    }
    init();
  },[]);
  return(
    <textarea id='realtimeEditor'></textarea>
  );

};
export default Editor