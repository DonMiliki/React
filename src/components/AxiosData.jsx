import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AxiosData() {
  const [getPost, setGetPost] = useState();
  

  useEffect(() => {
    axios
      .get("https://haveibeenpwned.com/api/v2/breaches")
      .then(
        (response) => setGetPost(response.data)
          
      );
      
  }, []);
  return (
    <>
      <h2 className="text-3xl font-bold, flex justify-center">Data from Axios</h2>

      <ul>
        {getPost?.map((item) => (
          <li key={item.Name}>
            <h1 className="text-white">{item.Domain}</h1>
            <p className="text-decoration-line: underline">{item.AddedDate}</p>
            <p>{item.PwnCount}</p>
          </li>


        ))}
      </ul>
    </>
  );
}