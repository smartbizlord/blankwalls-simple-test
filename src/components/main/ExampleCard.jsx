import React from "react";
import { AddCircleOutline, ChevronForwardOutline } from "react-ionicons";

const ExampleCard = ({firstText, linkText, afterText}) => {
    return (
        <div className={`w-full flex px-2 py-3 gap-3 hover:bg-gray-50 maes relative bg-white shadow-md rounded-md`}>
            <AddCircleOutline
                color={'#c242a0'} 
                title={"Add Example"}
                height="15px"
                width="15px"
                cssClasses={"cursor-pointer"}
            />
            {/* <span className="text-base font-bold h-5 w-5 rounded-full bg-pink-200 text-xs flex items-center justify-center">{index + 1}</span> */}
            <span className="text-xs flex-1">{firstText} <span className="text-blue-400 cursor-pointer">{linkText}</span> {afterText}</span>
            <ChevronForwardOutline
              color={'#c242a0'} 
              title={"Go"}
              height="15px"
              width="15px"
              cssClasses={"cursor-pointer"}
            />
                
            {/* {stepTitle} - {index} */}
        </div>
    )
}

export default React.memo(ExampleCard)