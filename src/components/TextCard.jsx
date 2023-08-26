import React from "react";

const TextCard = ({ gradient, text, heading, body }) => {
    return (
        <div
            className={`w-[15vw] h-[30vh] ${gradient} rounded-3xl text-${text} px-4 py-2 font-roboto`}
        >
            <div className="text-xl font-bold font-bricolage mb-2">
                {heading}
            </div>
            <span className="opacity-70 text-sm leading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                officia expedita. Veritatis dolores sed, architecto unde velit
                nihil alias ducimus
            </span>
        </div>
    );
};

export default TextCard;
