import React,{ useState } from "react";
import {FcCheckmark} from "react-icons/fc";
import {FiArrowLeftCircle} from "react-icons/fi";
import { Link, redirect } from "react-router-dom";


const CreateEvent = () => {
    
    const [create,setCreate] = useState(true);
    const handleClick = () => {
      return setCreate(false);
    };
    const handleGoBack = () => {
        return setCreate(true);
    }

    return(
        <section className="flex h-screen bg-[#eaf1f4] justify-center items-center">
            <div className="flex justify-between w-[70%]">
                <div >
                    <h1 className=" text-2xl">Wish to help students?</h1>
                    <br/>
                    <h1 className=" text-6xl font-bold"> Let's make it happen.</h1>
                    <br/>
                    <div className=" w-64 pt-5 text-lg">
                        <p>We see the opportunity to make a difference. 
                        To building a better tomorrow for students.</p>
                    </div>
                </div>
                
                <div className=" -mt-4 flex-col">
                    <div className=" m-5">
                    <input className=" bg-transparent outline-none border-b h-10 px-7 border-b-gray-800 w-full" type="text" placeholder="Event Name" name="eName"/>
                    </div>
                    <div className="m-5"><input className="bg-transparent outline-none h-10 px-7 w-full border-b border-b-gray-800" type="text" placeholder="University Name" name="uni"/></div>
                    <div className="m-5"><input className="bg-transparent outline-none h-10 px-7 w-full border-b border-b-gray-800" type="text" placeholder="Topic Name"/></div>
                    <div className="m-5">
                        <textarea className="bg-transparent outline-none h-10 px-7 w-full border-b border-b-gray-800" placeholder="Event Description"/>
                    </div>
                    <div className="m-5 flex gap-x-3"><input className="bg-transparent border-b outline-none h-10 px-7 cursor-pointer border-b-gray-800" type="date" placeholder="Date of the Event" name="date"/>
                    <input className=" border-b bg-transparent outline-none h-10 px-7 cursor-pointer border-b-gray-800" type="time" placeholder="Time of the Event" name="time"/>
                    </div>
                    <div className="flex justify-between items-center">
                    <button className="bg-gray-800 text-white border-2 font-semibold hover:border-gray-800 hover:bg-transparent hover:text-gray-800 px-8 py-4 mt-7 ml-6 flex">
                    
                    <Link to="" className=" text-md ">Register Now</Link>
                    
                    </button>
                    <button onClick={()=>{
                        return redirect("/");
                    }} className="border-solid border-gray-800 rounded-full mr-6 mt-7"><FcCheckmark/></button>
                    </div>
                    <div className="flex m-5 justify-between mt-9  ">
                       
                        <button className="flex items-center justify-center gap-2" onClick={handleGoBack}><FiArrowLeftCircle className=" align-self mt-1"/>Go Back</button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default CreateEvent;