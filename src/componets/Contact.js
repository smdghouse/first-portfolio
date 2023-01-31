const Contact =()=>{
    return(
        <div name="contact" className="flex w-full h-screen flex-col justify-center items-center bg-gradient-to-b from-blue-200 via-slate-200 to-black">
            <h1 className="capitalize text-3xl text-black border-b-4 border-blue-400 font-bold ">contact</h1>
             <form method="POST" action="https://getform.io/f/b696a285-4f8f-4172-82b4-f29bf3d6140d" className="flex flex-wrap flex-col  items-center mt-10">
                <input type="text" name="name" className="md:w-96 w-80 rounded-md focus:outline-none bg-black text-white p-2 " placeholder="Name"required />
                <input type="email" name="email" className="md:w-96 w-80 rounded-md focus:outline-none bg-black text-white my-5 p-2 " placeholder="Email" required/>
                <textarea rows="10" className="md:w-96 w-80 rounded-md resize-none focus:outline-none bg-black text-white" name="message" placeholder="Message" required></textarea>
                <button className="w-40 capitalize rounded-md shadow-lg font-bold text-lg p-2 from-red-300 via-gray-600 to-blue-300 text-white mt-5 bg-gradient-to-r">Submit</button>
             </form>
        </div>
       
    )
}
export default Contact