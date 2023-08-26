import React from "react";

const ImageCard = ({ name, college, src }) => {
    return (
        <div className="h-[45vh] w-[15vw] bg-red-200 rounded-3xl relative">
            <img src={src} className="object-cover h-full w-full rounded-3xl" />
            <div className="bg-white h-[7vh] w-[10vw] bottom-[5vh] absolute rounded-e-3xl">
                <div className="font-bricolage text-lg ml-4 mt-1">{name}</div>
                <div className="font-roboto text-xs ml-4 opacity-60">
                    {college}
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
