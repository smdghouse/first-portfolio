import { useState } from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import {RiCloseFill} from "react-icons/ri"
import {Link} from "react-scroll"
const Header =()=>{
    const headlinks=["home","portfolio","experience","about",'contact']
    const [nav,setNav]=useState(false)
    
   
    return(

        <div className=" bg-black w-full h-20 justify-between flex  items-center shadow-xl  md:justify-between sticky  top-0">
            <h1 className=" py-5 capitalize z-20  text-white text-4xl px-4 font-signature md:mx-5">ghouse</h1>
            <ul className="hidden md:flex justify-between mx-12">
                {
                    headlinks.map((val,index)=>( <li key={index} className="text-white text-xl capitalize p-5 cursor-pointer"><Link to={val} smooth duration={500}>{val}</Link></li>))
                }
                
            </ul>
            <div className="text-white pr-3 md:hidden z-20" onClick={()=>{
                !nav?setNav(true):setNav(false)
            }}>

                {

                    !nav?  <GiHamburgerMenu size={30} />:<RiCloseFill size={30} className="z-20"/>
                }
                </div>
                {
                    (nav)&&

                    (<ul id="slide" className={`flex flex-col w-full min-h-screen top-0 absolute left-0 justify-center items-center bg-gradient-to-b from-black to-blue-200  duration-75 md:hidden ` }   >
                        {
                            headlinks.map((val,index)=>(<li key={index} className="text-white text-xl capitalize py-5 cursor-pointer"><Link to={val} onClick={()=>setNav(false)} smooth duration={500}>{val}</Link></li>))
                        }
                    </ul>)
                }
          
            
           
        </div>
    )
}
export default Header 