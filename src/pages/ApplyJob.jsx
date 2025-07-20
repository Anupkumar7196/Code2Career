import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { jobsData } from '../assets/assets';

const ApplyJob = () => {

  const {id} = useParams();
  
  const [JobData, setJobData] = useState(null);

  const {jobs}= useContext(AppContext);

  const fetchJob = async ()=>{
    const data = jobs.filter(job => job._id === id)
    if(data.length !== 0){
      setJobData(data[0])
      console.log(data[0]);
      
    }
  }
  useEffect(()=>{
    if(jobs.length>0){
      fetchJob()
    }
  },[id, jobs])

  return JobData ? (
    <div>
      
    </div>
  ) : (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-15 h-15 border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin'></div>
    </div>
  )
}

export default ApplyJob
