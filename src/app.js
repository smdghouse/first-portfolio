import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./componets/header";
import Home from "./componets/home.js"
import SocialMedia from "./componets/socialmedia";
import About from "./componets/About"
import Portfolio from "./componets/Portfolio";
import Experience from "./componets/Experience";
import Contact from "./componets/Contact";
const App=()=>{
    return(
        <>
        <Header/>
        <Home/>
        <SocialMedia/>
        <Portfolio/>
        <Experience/>
        <About/>
        <Contact/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)