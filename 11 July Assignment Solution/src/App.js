
import {Person,Button, Header, List} from "./Components.js";

function App() {
  function  event() {
   document.getElementById('btn').innerText="I was clicked"
  }
  return (
    
    <div>
      <Person name="Hemant" age ="20" />
      <Button text="Mai Button Hoon" onClick = {event}/>
      <Header title = "This is title "/>
      <List items ={['Tea','Atta','Sugar','Coffee','Ghee']}/>
    </div>
  );
}

export default App;
