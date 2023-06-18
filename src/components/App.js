
import React,{useState} from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {

  let header="Welcome to my website";
  let footer=" 2023 My Website. All rights reserved.";
  let content="This is the content of my website.";

  return (
    <div>
        <PageLayout header={header} footer={footer} children={content}/>
    </div>
  )
}

export default App
