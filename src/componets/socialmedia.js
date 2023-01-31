import {AiFillGithub,AiFillMail,AiFillTwitterSquare, } from "react-icons/ai"
import {GrLinkedin} from "react-icons/gr"
const SocialMedia=()=>

{
    const medialinks = [
        {
            link:"https://github.com/smdghouse",
            logo:(
                <> 
                 github <AiFillGithub size={"30px"}  className="mr-2"/> 
                </>
            ),
            style:"rounded-tr-md"
        },
        {
            link:"https://www.linkedin.com/in/smd-ghouse-8335a9222/?trk=public-profile-join-page",
            logo:(
                <> 
                 linkedin <GrLinkedin size={"30px"} className="mr-2"/> 
                </>
            )
         
        },
        {
            link:"mailto:smdghouse2001@gmail.com",
            logo:(
                <> 
                 Email <AiFillMail size={"30px"}  className="mr-2"/> 
                </>
            ),
        },
        {
            link:"https://twitter.com/smd_its",
            logo:(
                <> 
                 twitter <AiFillTwitterSquare size={"30px"}  className="mr-2"/> 
                </>
            ),
            style:"rounded-br-md"
        }
    ]
    return(
        <ul className=" md:flex flex-col hidden md:top-52 left-0 fixed ">
            {
                medialinks.map(({link,logo,style},index)=>
                (
                     <li className={" w-32 h-12 py-2 bg-blue-300 ml-[-75px] hover:ml-[0px] duration-300 hover:rounded-r-md " + ""+style} key={index}>
                <a className="  text-xl text-black pl-2 capitalize flex justify-between items-center "   href={link}  target="_blank">
                   {logo}
                </a>
            </li>

                ))
            }
           
        </ul>
    )
}
export default SocialMedia