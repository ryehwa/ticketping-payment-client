import React, { useState, useEffect } from "react";
import PerformanceContext from "./PerformanceContext";

const PerformanceProvider = ({ children}) => {
    const [performanceId, setPerformanceId] = useState(null);

    useEffect(() => {
       setPerformanceId(localStorage.getItem("performanceId"))
    }, []);

    const SavePerformanceId = (performId) => {
        setPerformanceId(performId);
        localStorage.setItem("performanceId", performId);
    };

    //remove
    const Remove = () => {
        setPerformanceId(null);

        localStorage.removeItem("performanceId")
    };

    return (
        <PerformanceContext.Provider
            value={{
                performanceId,
                SavePerformanceId,
                Remove,
                setPerformanceId
            }}
            >
            {children}
        </PerformanceContext.Provider>
    );
};

export default PerformanceProvider;