import React,{ useState } from "react";
import "../index.css"
import {CiLocationOn} from 'react-icons/ci';
// import { motion } from "framer-motion";
// import {BiSolidUserVoice} from "react-icons/bi";
// import { Card, CardBody, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";



const GetCollege = () => {
    return(

    
      <div class=" h-96 w-96 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="bg-cover h-full">
          <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./da.jpg" alt="" />
        </div>
        <div class="  absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class=" absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold mb-10 text-white font-[Roboto]">Name</h1>
          <p class="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-[Roboto] mt-2">Location</p>
          <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 font-[Roboto]">Know-More</button>
        </div>
    </div>
     
    );
};

export default GetCollege;