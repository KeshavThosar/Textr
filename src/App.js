import {useEffect,useState} from 'react'
import './App.css';
import db from './firebase'
import firebase from 'firebase'
import Modal from './Modal'

//Is it getting updated in the database? Yes I am figuring it outj

function App() 
{
  const [input, setInput] = useState("");
  const[list, setList] = useState([]);

  const [username, setUsername] = useState("Guest")
  const [color, setColor] = useState("red")
  // useEffect(() => {
  //   const name = window.prompt("Enter a username")
  //   setUsername(name)
  // }, []);

  useEffect(() =>{
    db
      .collection("messages")
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot)=>{
        snapshot.docs.forEach(doc => console.log("Message ",doc.data()))
        setList(snapshot.docs.map(doc =>(  {
          id: doc.id,
          data: doc.data(),
        })))
      })
  }, [])
  //continue coding
  const sendMessage = (event) => {
    event.preventDefault();
    if(input.length <= 0){
        return;
    }
    const chatMessage={
      color: color,
      user: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }
    db.collection('messages').add(chatMessage)
    setInput("")
    
  }
  return (
    <div className="app">
      <Modal setUsername={setUsername} setColor={setColor}/>
      <div className="header">Textr</div>
      {
        list.map(({id, data : {color, user, message, timestamp }}) => {
          return (
            <p className="chatMessage" style={{color: color}}>[{user}]: { message }</p> 
          )
        } 
        )
      }
      <form >
        <input placeholder="Type your message here" value={input} onChange={event => setInput(event.target.value)}/>                
        <button onClick={sendMessage} type="submit">Send Message</button> 
      </form>
    </div>
  );
}

export default App;


//text messages