import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Section from './Components/Section';
import Addquestion from './Components/Addquestion';
import Addanswer from './Components/Addanswer';
import Login from './Components/Login';


function App() {
  // let questionAndAnswers=[
  //   {
  //     id:"1",
  //    answeredBy: "kamal rastogi",
  //     questionedBy: "arun tiwari",
  //     question: "What is the famous food of Agra?",
  //     answer: "Petha is the famous sweet of Agra",
  //   }
    
    
  // ]
  
  // let users = [
  //   {
  //     username: "kamal rastogi",
  //     password:"12345",
  //     email:"hello@gmail.com"
  //   },
  // ];


  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={[<Header/>,<Section/>]}></Route>
          <Route path="/Addquestion" element={[<Header/>,<Addquestion/>]}></Route>
          <Route path="/Addanswer" element={[<Header/>,<Addanswer/>]}></Route>
          <Route path="/Login" element={[<Header/>,<Login/>]}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
