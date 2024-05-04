import React from "react";
import { EllipsisHorizontal } from "react-ionicons";
import "./testStep.css"

const TestStep = ({stepTitle, index, firstText, linkText, afterText}) => {
    return (
        <div key={1} index={stepTitle} className={`w-full flex px-4 py-3 gap-8 hover:bg-gray-50 cursor-pointer maes relative ${Number(index + 1) % 2 === 0 ? "bg-gray-200" : "bg-white"}`}>
            <input type="checkbox" name={`${stepTitle}_${index}`} id="" />
            <span className="text-base font-bold h-5 w-5 rounded-full bg-pink-200 text-xs flex items-center justify-center">{index + 1}</span>
            <span className="text-xs">{firstText} <span className="text-blue-400 cursor-pointer">{linkText}</span> {afterText}</span>
            <EllipsisHorizontal
              color={'#838383'} 
              title={"More"}
              height="15px"
              width="15px"
              cssClasses={"cursor-pointer hidden maed absolute right-4"}
            />
            {/* {stepTitle} - {index} */}
        </div>
    )
}

export default React.memo(TestStep)