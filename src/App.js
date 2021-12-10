// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Createissue from "./components/create-user";
import Editissue from "./components/edit-issue";
import Issuelist from "./components/issue-list";
import Nav from "./components/nav-list";
import "./App.css";

function App() {
  return (
    <Router>

      <Nav/>
     <Routes>
      
        <Route path="/" element={<Issuelist/>}/>
        <Route path="/create" element={<Createissue/>}/>
        <Route path="/edit/:id" element={<Editissue/>}/>
        
        </Routes>
        
      </Router>
     
    
  );
}

export default App;



