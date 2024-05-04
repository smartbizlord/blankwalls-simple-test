import React, { useMemo } from "react";
import { GridOutline, ChatboxEllipsesOutline, ShieldOutline, BrowsersOutline, FolderOutline, ClipboardOutline, ReaderOutline, TodayOutline, ReceiptOutline, SettingsOutline } from 'react-ionicons'
import { changeLocation, useCurrentLocation } from "../../state/sideBarSlice";
import { useDispatch } from "react-redux";

const NavItem = ({title}) => {

    const navData = useMemo(() => {
        return {
            dashboard: "Dashboard",
            reviews: "Reviews",
            testCases: "Test Cases",
            testDataProfile: "Test Data Profile",
            testSuites: "Test Suites",
            testPlans: "Test Plans",
            testResults: "Test Results",
            environments: "Environments",
            requirements: "Requirements",
            settings: "Settings",
        }
    }, [])

    const dispatch = useDispatch()


    return (
        <div className={`w-full flex gap-4 px-4 h-8 rounded-md cursor-pointer hover:bg-gray-200 text-xs items-center ${title === useCurrentLocation() ? "bg-gray-300" : "bg-white"}`} onClick={() => {dispatch(changeLocation(title))}}>
            <div className={`absolute h-20 w-20 bg-base rounded-full left-[-75px] ${title !== useCurrentLocation() ? "hidden" : ""}`}></div>
            {
                title === navData.dashboard ? (
                    <GridOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : title === navData.reviews ? (
                    <ChatboxEllipsesOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : title === navData.testCases ? (
                    <ShieldOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : title === navData.testDataProfile ? (
                    <BrowsersOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : title === navData.testSuites ? (
                    <FolderOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : title === navData.testPlans ? (
                    <ClipboardOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : title === navData.testResults ? (
                    <ReaderOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : title === navData.environments ? (
                    <TodayOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : title === navData.requirements ? (
                    <ReceiptOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : title === navData.settings ? (
                    <SettingsOutline  
                        title={title}
                        height="15px"
                        width="15px"
                    />
                )
                : (null)
            }
            <span>{title}</span>
            {/* <span>{useCurrentLocation()} - kkk</span> */}
        </div>
    )
}

export default React.memo(NavItem)