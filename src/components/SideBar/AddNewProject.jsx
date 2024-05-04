import React from "react";
import { AddCircleOutline } from 'react-ionicons'

const AddNewProject = () => {
    return (
        <div className="border border-solid rounded-md flex flex-col gap-4 p-4">
            <select name="project" id="" className="text-xs outline-none cursor-pointer">
                <option value="1">Default Project</option>
                <option value="2">Project 2</option>
                <option value="3">Project 3</option>
                <option value="4">Project 4</option>
                <option value="5">Project 5</option>
                <option value="6">Project 6</option>
            </select>
            <div className="flex gap-1 justify-center text-xs text-[#4281ff] cursor-pointer">
                <AddCircleOutline
                    color={'#4281ff'} 
                    title={"Add New Project"}
                    height="15px"
                    width="15px"
                    cssClasses={"cursor-pointer"}
                />
                <span>Add New Project</span>
            </div>
        </div>
    )
}

export default React.memo(AddNewProject)