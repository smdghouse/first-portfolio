import cart from "../asserts/cartmanage.png"
import netflix from "../asserts/netflixclone.png"
import weather from "../asserts/weatherapp.png"
import teslaclone from "../asserts/teslaclone.png"
import saloon from "../asserts/saloon.png"
import ecommerce from "../asserts/ecommerce.png"
import note from "../asserts/note.png"
import crypto from "../asserts/Screenshot (76).png"
import ghousetodo from "../asserts/Screenshot (77).png"

import {BsGithub} from "react-icons/bs"
const Portfolio =()=>{
    const list=[
        {
            img:crypto,
            demo:"https://crypto-nerd.netlify.app/",
            gitbut:"https://github.com/smdghouse/crypto_nerd"
        },
        
        {
            img:ghousetodo,
            demo:"https://smdghouse.github.io/vanila_todo/",
            gitbut:"https://github.com/smdghouse/vanila_todo"
        },
        {
            img:weather,
            demo:"https://smdghouse.github.io/weather_app/",
            gitbut:"https://github.com/smdghouse/weather_app"
        },
        {
            img:cart,
            demo:"https://shopping-cart-navy-three.vercel.app/",
            gitbut:"https://github.com/smdghouse/shopping-cart"
        },
        {
            img:netflix,
            demo:"https://moviestrail.netlify.app",
            gitbut:"https://github.com/smdghouse/netflixclone"
        },
        
        {
            img:teslaclone,
            demo:"https://smdghouse.github.io/tesla-clone/",
            gitbut:"https://github.com/smdghouse/tesla-clone"
        },
        {
            img:saloon,
            demo:"https://smdghouse.github.io/salon-website/",
            gitbut:"https://github.com/smdghouse/salon-website"
        },
        {
            img:ecommerce,
            demo:"https://smdghouse.github.io/cara-ecommerce/",
            gitbut:"https://github.com/smdghouse/cara-ecommerce"
        },
        {
            img:note,
            demo:"#",
            gitbut:"https://github.com/smdghouse/todolist-react"
        },


    ]

    return(
        <div name="portfolio" className="pt-20 flex justify-center flex-col items-center w-full min-h-screen bg-gradient-to-b from-blue-200 to-slate-200" flex>
        <h1 className="capitalize font-bold text-3xl border-b-3 text-gray-700 border-b-4 border-blue-400">portfolio</h1>
        <div className="flex lg:flex-row justify-start flex-wrap flex-col items-center p-10 lg:ml-20">
            
             {
                list.map(({img,demo,gitbut},index)=>(<div key={index} className="hover:scale-[1.05] duration-300 lg:w-1/4 flex flex-col bg- rounded-md m-5 md:m-10">
                <img src={img} className=" rounded-t-md" alt="cart project" />
                <a href={demo} target="_blank" className="text-center bg-blue-300 font-bold text-lg text-black">Demo</a>
                <a href={gitbut} target="_blank" className=" bg-black text-white rounded-b-md flex items-center justify-center">Github<BsGithub/></a>
             </div>))
             }
             
            
            </div>
            
        </div>
        
    )
}
export default Portfolio