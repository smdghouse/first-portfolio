import {AiFillGithub,AiFillMail,AiFillTwitterSquare, } from "react-icons/ai"
import {GrLinkedin} from "react-icons/gr"
const About=()=>{
    const medialinks = [
        {
            link:"https://github.com/smdghouse",
            logo:(
                <> 
                <AiFillGithub size={"30px"}  className="mr-2"/> 
                </>
            ),
            style:"rounded-tr-md"
        },
        {
            link:"https://www.linkedin.com/in/smd-ghouse-8335a9222/?trk=public-profile-join-page",
            logo:(
                <> 
              <GrLinkedin size={"30px"} className="mr-2"/> 
                </>
            )
         
        },
        {
            link:"mailto:smdghouse2001@gmail.com",
            logo:(
                <> 
               <AiFillMail size={"30px"}  className="mr-2"/> 
                </>
            ),
        },
        {
            link:"https://twitter.com/smd_its",
            logo:(
                <> 
                 <AiFillTwitterSquare size={"30px"}  className="mr-2"/> 
                </>
            ),
            style:"rounded-br-md"
        }
    ]
    return(

        <div  name="about" className="w-full md:pt-0 pt-40  lg:min-h-screen flex flex-col justify-center   items-center min-h-[30vh] bg-gradient-to-b from-black via-gray-700 to-blue-200">
        <h1 className=" inline  text-3xl font-bold text-white capitalize border-b-4  border-blue-400 mb-10 md:mb-0">
            about
        </h1>
        <p className="lg:px-80 text-white text-lg  px-10  mt-7 md:mb-0 mb-20 text-start">
        "Hi, I am Syed Mohammed Ghouse, a recent graduated Btech computer science. iam  passionated for web development. I have a strong understanding of technologies such as ReactJS, JavaScript, HTML, CSS, TailwindCSS, and Bootstrap. I take pride in my portfolio which showcases my skills and creativity in delivering high-quality websites. Outside of work, I enjoy staying active by hitting the gym, indulging in my hobby of video editing, and keeping up with my favorite podcasts. I value consistency and always strive to improve myself and my craft. I am confident that I can bring a valuable contribution to any web development team."
        </p>
        <ul className="flex items-start justify-start md:hidden">
            {
                medialinks.map(({logo,link})=>(<li className="pl-2"><a target="_blank" href={link}>{logo}</a></li>))
            }
        </ul>
           
        </div>
    )
}
export default About
