import React from "react";
import { EllipsisHorizontal } from 'react-ionicons'

const AccountInfoCard = () => {
    return (
        <div className="h-[50px] w-full bg-gray-300 flex px-4 items-center justify-between">
            <div className="flex gap-2">
                <img src="https://google.com/image.png" alt="User Profile" className="h-[30px] w-[30px] rounded-full bg-blue-300" />
                <div className="flex flex-col justify-between">
                    <h3 className="text-xs font-bold">John Doe</h3>
                    <span className="text-[9px] text-gray-500">johndoe@example.com</span>
                </div>
            </div>
            <EllipsisHorizontal
              color={'#838383'} 
              title={"More"}
              height="25px"
              width="25px"
              cssClasses={"cursor-pointer"}
            />
        </div>
    )
}

export default React.memo(AccountInfoCard)