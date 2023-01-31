import img from "../asserts/Potfolio-img.png"
import {AiOutlineArrowRight} from "react-icons/ai"
import {Link} from "react-scroll"
const Home=()=>{
    return(
        <div name="home" className="flex bg-gradient-to-b from-black flex-col via-black to-blue-200 items-center justify-center w-full min-h-screen lg:flex-row pt-20 md:pt-0 ">
            <div className="md:flex flex-wrap items-center px-4 lg:ml-48 md:px-0 flex-col ml-10 ">
                <h1 className=" text-white font-bold  text-2xl md:text-3xl capitalize">
                    i'm a front-end developer!
                </h1>
                <p className="text-gray-300 text-start  text-sm md:text-lg  my-5 lg:pl-10 ">
                Hello, my name is Syed Mohammed Ghouse and I am a recent graduate with a strong passion for Frontend Development. As a fresher, I am eager to bring my skills in React js , HTML, CSS, JavaScript,  Tailwindcss and modern web development frameworks to contribute to the growth of any company I work with. I am a quick learner, highly motivated and have a great attention to detail. I am confident that my skills and passion will make me a valuable addition to any Frontend Development team.
                </p>
                <Link to="portfolio" duration={500} smooth ><button className="md:my-10 lg:my-0 bg-gradient-to-r shadow-lg from-red-300 via-gray-600 to-blue-300 text-white md:font-bold md:text-xl text-sm flex justify-center items-center rounded-lg w-28 md:w-36 my-5 hover:bg-gradient-to-r hover:from-blue-300 hover:via-gray-600 hover:to-red-300 duration-1000">
                    portfolio<span><AiOutlineArrowRight/></span>
                </button></Link>
            </div>
            <div className="flex justify-center items-center mt-32 md:mt-0 ">
                <img className="rounded-lg md:h-1/2 md:w-1/2 hover:scale-[1.05] duration-500  w-60"  src={img} alt="ghouse" />
            </div>
        </div>
    )
}
export default Home