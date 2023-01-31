import css from "../asserts/skills/css.png"
import github from "../asserts/skills/github.png"
import html from "../asserts/skills/html.png"
import jspng from "../asserts/skills/javascript.png"
import reactpng from "../asserts/skills/react.png"
import tailwind from "../asserts/skills/tailwind.png"

const Experience = () => {
    const pnglist = [
        {
            img: html,
            text: "html",
            style: "shadow-orange-400"

        },
        {
            img: css,
            text: "css",
            style: "shadow-blue-400"
        },
        {
            img: jspng,
            text: "javascript",
            style: "shadow-yellow-400"
        },
        {
            img: reactpng,
            text: "react",
            style: "shadow-cyan-400 "
        },
        {
            img: github,
            text: "github",
            style: "shadow-white "
        },
        {
            img: tailwind,
            text: "tailwind",
            style:"shadow-cyan-600"
        },
    ]
    return (
        <div id="experience" className={`pt-20 flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b   from-slate-200 to-black`}>
            <h1 className="text-3xl font-bold border-b-4 border-blue-400 capitalize mb-10">Experience</h1>

            <div className=" lg:px-32 md:pl-10  flex  flex-wrap items-center flex-col md:flex-row md:justify-start
            justify-center ">
                {

                    pnglist.map(({ img, text, style, imgstyle }, index) => (<div className={`shadow-lg   w-48 mb-5 
                xl:mb-10 md:ml-10 bg-gray-500 flex items-center flex-col justify-center h-60 hover:scale-[1.05]  duration-300  `+ "" + style}><img key={index} className={` w-1/2  ` + "" + imgstyle} src={img} alt="css" />
                        <p className=" block capitalize text-white mt-5 font-bold text-xl">{text}</p>
                    </div>))
                }

            </div>
        </div>
    )
}
export default Experience