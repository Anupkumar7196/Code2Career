import { createContext, use, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) =>{

    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location: '',
    })

    const [isSearched, setIsSearched] = useState(false);

    const [jobs, setJobs] = useState([]);
    // Function to fetch jobs
    const fetchJobs = async () =>{
        setJobs(jobsData)
    }

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);


    useEffect(()=>{
        fetchJobs()
    }, [])

    const value = {
        setSearchFilter,searchFilter, 
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin,
        
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}