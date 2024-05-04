import React, { useMemo } from "react";
import NavItem from "./NavItem";

const NavsSection = () => {

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


    return (
        <div className="flex-1 flex flex-col gap-8 py-8">
            <div className="flex flex-col gap-[1px]">
                <NavItem title={navData.dashboard} />
                <NavItem title={navData.reviews} />
            </div>
            <div className="flex flex-col gap-[1px]">
                <NavItem title={navData.testCases} />
                <NavItem title={navData.testDataProfile} />
                <NavItem title={navData.testSuites} />
                <NavItem title={navData.testPlans} />
                <NavItem title={navData.testResults} />
                <NavItem title={navData.environments} />
                <NavItem title={navData.requirements} />
            </div>
            <div className="flex flex-col gap-[1px]">
                <NavItem title={navData.settings} />
            </div>
        </div>
    )
}

export default React.memo(NavsSection)