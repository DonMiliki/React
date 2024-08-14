import React from "react";
import Navbar from "./Navbar";
// import List from "../components/subTopics/List";
import FetchingData from "../components/FetchingData";


export default function Home() {
  return (
    <div className="bg-red-300">
      <Navbar />

      <h1 className="text-3xl font-bold, flex justify-center">Welcome to the USA University Websites.</h1>
      
      <FetchingData/>
      {/* <List /> */}
      
      
    </div>
  );
}
