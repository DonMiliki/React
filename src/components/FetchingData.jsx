import React, { useState, useEffect } from "react";

export default function FetchingData() {
  const [posts, setPosts] = useState();


  useEffect(() => {
    // fetch data using fetch API

    fetch("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => response.json())
      .then((data) => setPosts(data));
      // .catch((error) => console.error("API error", error));
  }, []);

  return (
    <>
      <div className="container">
        <ol>
          {posts?.map((item) => (
            <li key={item.country}>
              <h3>{item.domains}</h3>
              <p>{item.web_pages}</p></li>
          ))}
        </ol>
      </div>

      {/* Useeffect hook is a builtin react hook that allows us to perform side effects in your components 

    takes two arguments - callback functions that contains the side effect code 
    the dependency array that tells react when to run teh effect. */}
    </>
    // <div>What is APIs?
    //     API is Application Programming Interfaces

    //     APs are set of rules that define how different software applications
    //     can communicate or interact with each other.

    //     Define menthods, data formats that apps can use to request and exchange information

    //     RESTful APIs involves fetching data from endpoints(urls) and handles teh responses they provides

    //     fetch() or axios
    // </div>
  );
}