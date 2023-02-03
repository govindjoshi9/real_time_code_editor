import React, { useEffect } from 'react'
// import Codemirror from 'codemirror';

const Editor =()=>{
  useEffect(()=>{
    async function init(){
      Codemirror.formTextArea(document.getElementById("realtimeEditor"),{
          mode : {name: 'javascript', JSON: true},
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