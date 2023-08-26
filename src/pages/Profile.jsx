import { Tag } from "@chakra-ui/react";
import {BiUserCircle} from "react-icons/bi";
import {HiOutlineMail} from "react-icons/hi";
import {FaGraduationCap} from "react-icons/fa";
import {PiPencilLineFill} from "react-icons/pi";
import React from 'react';



    


const Profile = ({fName="A", lName="Sanghavi", admin="Student", gender="Femalw",email="blahblah@gmail.com", college="Adani"}) => {
   

    return(
        <section
       
         className=" bg-gray-50 flex h-screen  justify-center">
            <div  className=" bg-white mt-[120px] border-1 h-[70%] p-[60px] rounded-3xl shadow-xl z-40">
                <div className="">
                    <div className="flex gap-2">
                    <h1 contentEditable="true" className=" text-4xl font-bold">{fName}</h1><h1 contentEditable="true" className=" text-4xl font-bold">{lName}</h1>
                    </div>
                   
                    <div>
                    <Tag contentEditable="true" colorScheme="teal" mt={"10px"}>{admin}</Tag>
                    </div>

                </div>
                <hr className=" my-5"/>
                <div className="mt-11">
                        <div className="flex mt-5 items-center">
                            <div className="flex items-center justify-center gap-x-1"><BiUserCircle size={"20px"}/><p className=" text-gray-800">Gender:</p></div>
                            <div  className=" px-9"><p contentEditable="true">{gender}</p></div>
                            <div className=" ml-4"><PiPencilLineFill/></div>
                        </div>
                        <div className="flex mt-5 items-center">
                            <div className="flex items-center justify-center gap-x-1"><HiOutlineMail size={"20px"}/><p className=" text-gray-800">E-Mail:</p></div>
                            <div className=" px-9"><Tag contentEditable="true" padding={"10px"} w={"100%"}>{email}</Tag></div>
                            <div className=" ml-4"><PiPencilLineFill/></div>
                        </div>
                        <div className="flex mt-5 items-center">
                            <div className="flex items-center justify-center gap-x-1"><FaGraduationCap size={"20px"}/><p className=" text-gray-800">College:</p></div>
                            <div className=" px-9"><p contentEditable="true">{college}</p></div>
                            <div className=" ml-4"><PiPencilLineFill/></div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;


  