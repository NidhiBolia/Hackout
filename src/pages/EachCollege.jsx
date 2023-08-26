import { Text,Image, Heading, Center, Stack } from "@chakra-ui/react";
import React from "react";
import EventCard from "./EventCard";


const EachCollege = () => {
   
    return (
        <main class=" flex flex-row h-screen">

        <div class=" w-3/5 h-full flex max-h-screen  flex-col flex-grow bg-white items-center overflow-hidden">
        <Stack mt={"100px"} >
            
            <div className=" top-[120px] left-[100px]">
            <Heading  paddingBottom={"10px"} size={"lg"}>Welcome to DAIICT</Heading>
            <hr  className=" mb-4 w-[79%]"/>
            <Image src="https://10619-2.s.cdn12.com/rests/original/102_508003615.jpg" maxW={"md"}/>
            <Center maxW={'465px'} flexWrap={"wrap"}>
            <Text >Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT), Gandhinagar represents Wave-4 
            of educational innovation in Gujarat.</Text><br/>
            <Text>DA-IICT is spread over 50 acres of land in Gandhinagar, Capital City of Gujarat. The DA-IICT campus is caringly planned and designed as an environmentally conscious campus in the country. The architecture of DA-IICT is functional, but what surrounds it is a fascinating garden. </Text>
            </Center>
            </div>
        </Stack>
        </div>

        <div className=" w-2/5 bg-gray-50 p-[90px] overflow-y-auto items-center ">
            <div className=" items-center justify-center mb-5">
                <EventCard/>
            </div>
            <div className=" items-center justify-center mb-5">
                <EventCard/>
            </div>
            <div className=" items-center justify-center mb-5">
                <EventCard/>
            </div>
        </div>
        

        </main>
    );
}

export default EachCollege;

 /*<Flex pt={"90px"}>
            <Center w="50%"  h='calc(70vh)' ml={"16px"} mt={"70px"} justifyContent={"center"} alignItems={"center"}>
            <Stack>
            <hr className="w-[79%]"/>
            <div className="fixed absolute sticky top-[120px] left-[100px]">
            <Heading padding={"9px"}  size={"lg"}>Welcome to <br/> DAIICT</Heading>
            <hr className="w-[79%]"/>
            <Image src="https://10619-2.s.cdn12.com/rests/original/102_508003615.jpg" maxW={"md"}/>
            <Center maxW={'500px'} flexWrap={"wrap"}>
            <Text >Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT), Gandhinagar represents Wave-4 
            of educational innovation in Gujarat.</Text><br/>
            <Text>DA-IICT is spread over 50 acres of land in Gandhinagar, Capital City of Gujarat. The DA-IICT campus is caringly planned and designed as an environmentally conscious campus in the country. The architecture of DA-IICT is functional, but what surrounds it is a fascinating garden. </Text>
            </Center>
            </div>
            </Stack>
            
           
            
            </Center>
            <Box flex={1} border={"beige"} alignContent={"center"}>
            <div>
            <h1>Events </h1>
            <div className=" items-center">

                <div className=" m-[10px] overflow-scroll">
                <Center >
                <EventCard/> 
                </Center>
                <Center >
                <EventCard/> 
                </Center>
                <Center >
                <EventCard/> 
                </Center>
                
                </div>
  
            </div>
            </div>
            
            
            </Box>
       </Flex>*/