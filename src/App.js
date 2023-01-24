// eslint-disable-next-line
import axios, * as others from 'axios';
import  React, {useState} from 'react';
import './App.css';

function App() {
  const [name , setName] = useState();
  const [file , setFile] =useState();

  const send= event =>{
   const data =new  FormData();
   data.append("name" ,name);
   data.append("file", file);
   axios.post("http://localhost:3000/upload", data).then(res => console.log(res)).catch(err=> console.log(err));
  }
  return (
    <div className="App">
      <header className="App-header">
        <form action='#'>
          <div className='flex'>
            <label htmlFor='name'> Name</label>
            <input type="text" id="name" onChange={event=>{
              const {value}= event.target;
              setName(value);
            }}></input>

          </div>
          <div className='flex'>
          <label htmlFor='file'>File</label>
          <input type="file" id="file" onChange={event =>{
            const file= event.target.files[0];
            setFile(file);
          
          }}></input>
          </div>
          <button onClick={send}>SEND</button>
        </form>
      </header>
    </div>
  );
}

export default App;
