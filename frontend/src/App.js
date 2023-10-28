import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;


// here upar me 'exact' use kra gya h kyunki dono path me '/' hai.. so browser phle  / padhega.. and homepage ko render krega.
// then chats padhega to chatpage ko render krega..

// so '/' me sirf homepage and '/chats' me sirf chatpage render ho.. uske liye exact lgaaye.. ki exact sirf '/' ho.. tb hi sirf hoempage render kre. aur kbhi nhi