import React, { createContext, useState } from "react";


export const AuthContext = createContext();



export default function AuthProvider(props) {
  const [text, setText] = useState();
  console.log("ttetttxttt",text)
  const [movie, setMovie] = useState([]);


  let data = {

    text,
    setText,
    movie,
    setMovie,

  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
