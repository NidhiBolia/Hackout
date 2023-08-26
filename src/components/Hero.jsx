import { useEffect, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ImageCard from "./ImageCard";
import TextCard from "./TextCard";

const Hero = () => {
    const arrowRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.addEventListener("click", () => {
            window.location.href = "/sign-up";
        });

        buttonRef.current.addEventListener("mouseover", () => {
            arrowRef.current.style.transform = "translateX(10px)";
        });
        buttonRef.current.addEventListener("mouseleave", () => {
            arrowRef.current.style.transform = "translateX(0px)";
        });
    }, []);

    return (
        <section id="hero" className="grid grid-cols-2">
            <div className=" min-h-screen ml-[2vw] mt-[6vh] w-[35vw]">
                <div className="font-bricolage text-7xl">
                    Get to experience webiners in your own way
                </div>
                <div className="font-roboto mt-[25vh] w-[30vw]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias unde ipsam harum obcaecati eius nisi, error quod
                    labore saepe vel voluptates.
                </div>
                <div
                    ref={buttonRef}
                    className="w-[18vw] cursor-pointer h-[6vh] hover:bg-[#000]  bg-[#1f1f1f] mt-9 rounded-full text-white flex items-center font-bricolage justify-between"
                >
                    <span className="ml-5">Let's get you started</span>
                    <div
                        ref={arrowRef}
                        className="bg-white rounded-full w-8 h-8 mr-4 grid items-center transition-all"
                    >
                        <AiOutlineArrowRight className="text-black w-5 h-5 ml-2" />
                    </div>
                </div>
            </div>
            <div className="min-h-screen pt-[8vh] grid grid-cols-3 ">
                <div className="grid grid-rows-2">
                    <ImageCard
                        name="Priyanka"
                        college="IIT Bombay"
                        src="https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    />
                    <TextCard
                        gradient="bg-red-200"
                        text="black"
                        heading="Best Way to get guidance"
                    />
                </div>
                <div className="grid grid-rows-2">
                    <ImageCard
                        name="Rahul"
                        college="IISC. Banglore"
                        src="https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                    />
                    <TextCard
                        gradient="bg-green-200"
                        text="black"
                        heading="The Guides here are awesome"
                    />
                </div>
                <div className="grid grid-rows-2">
                    <ImageCard
                        name="Mogambo"
                        college="JNU"
                        src="https://images.unsplash.com/photo-1545696968-1a5245650b36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
                    />
                    <TextCard
                        gradient="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-100 to-blue-200"
                        text="black"
                        heading="Made it all too simple"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
