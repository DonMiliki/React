// // import Header from "./components/Header";
// // import Footer from "./components/Footer";
// // import Greetings from "./components/Greetings";
// // import myself from "./components/myself";
// // import whatIDo from "./components/whatIDo";
// // import Hobbies from "./components/Hobbies";
// // import ParentComponent from "./props/ParentComponent";
// // import Counter from "./components/counter";
// // import TernaryOperator from "./components/tenaryOperator";
// // import ToggleMessage from "./components/ToggleMessageComponent";
// // import Form from "./components/form";
// // import List from "./components/List";
// // import UserList from "./components/UserList";

// // import ConditionalRendering from "./components/ConditionalRendering";
// // import ClassRendering from "./components/ClassRendering";

// // export default function App() {
// //   return (
// // <div className="App">
//   {/* <TernaryOperator/>
//   <ToggleMessage/> */}
//   {/* <Form/>
//   <ClassRendering/> */}
//   {/* <List/> */}
//   // <UserList/>

//   {/* <ConditionalRendering/> */}
//   {/* <Counter/>
//   <ParentComponent/>
//   <Greetings/>
//   <myself/>
//   <whatIDo/>
//   <Hobbies/>
//   <Footer/>
//   <Header/> */}
      
    // </div>
//   );
// }

// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Navbar from "./pages/Navbar";



export default function App() {
  return (
    
    <Router>
      {/* <Navbar/> */}
      

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>

  
  );
}
