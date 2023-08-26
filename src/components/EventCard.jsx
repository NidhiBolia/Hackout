import React from "react";
import { Tag } from "@chakra-ui/react";



const EventCard = ({ eventName, uni, eventImg }) => {
    return (
        <div className="h-[35vh] w-[36vw] bg-red-200 rounded-3xl relative">
            <img src={eventImg} className="object-cover h-full w-full rounded-3xl" />
            <div className="bg-white h-[10vh] w-[13vw] bottom-[5vh] absolute rounded-e-3xl">
                <div className="font-bricolage text-lg ml-4 mt-1">{eventName}</div>
                <div className="font-roboto text-xs ml-4 opacity-60 ">
                    {uni}
                </div>
                
            </div>
            <div className="absolute right-6 bottom-6 cursor-pointer shadow-md">
                    <Tag _hover={{  textColor:"#525953" }} _focus={{ boxShadow: "outline" }} backgroundColor={"white"}>Register Me</Tag>
                </div>
        </div>
    );
};

export default EventCard;