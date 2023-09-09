import { FaBan } from "react-icons/fa";
import { deleteTodo, makeDoingDone } from "../share/common";
import { FaCheck } from "react-icons/fa6";
import useAllTodo from "../share/useAllTodo";
import { useState } from "react";

const AllTask = () => {
  
    const [see,setSee] = useState(false)
    const [allTodo, refetch] = useAllTodo()
    const handelSee = () =>{
        setSee(!see)
    }
    const handelDelet = (id,refetch) =>{
    // delete
        deleteTodo(id,refetch)
    }

    const handelDoing = (id,refetch) =>{
        // Doing
        makeDoingDone(`http://localhost:5000/makeDoing/${id}`,refetch)
    }
    const handelDone = (id,refetch) =>{
        // Done
        makeDoingDone(`http://localhost:5000/makeDone/${id}`,refetch)
    }
   
    return (
        <div>
            <div className="bg-[#00000042]  rounded-md text-center h-full  text-white">
            <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">All-Task - {`(${allTodo.length})`}</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">

            {
                    allTodo.map((item,index) => <>
                   <div className=" px-5 mx-auto p-5 rounded-md mt-5  lg:w-96 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">{item.description}... <button className="text-blue-600" onClick={handelSee}>See-more</button></h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-between items-center gap-2">
                    <button  className={`px-4 py-2 rounded-full ${item.status ? "bg-gray-400" : "bg-white"}`} disabled={item.status}>Todo</button>
                    <button className={`px-4 py-2 rounded-full ${item.status == 'done' || item.status == 'doing' ? "bg-gray-400" : "bg-white"}`} onClick={() => handelDoing(item._id)}>Doing</button>
                    <button className={`bg-white px-4 py-2 rounded-full ${item.status == 'done' ? "bg-gray-400" : "bg-white"}`}>{
                        item.status == "done" ? <span className={`text-green-800 text-xl font-bold `}><FaCheck /></span> : <span className="text-xs" onClick={() => handelDone(item._id)}>Make-Done</span>
                    }</button>
                    <button className="bg-white px-4 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handelDelet(item._id,refetch)} > <FaBan/> </button>
                    
                </div>
            
            </div>
                    </>)
                }
            
            
            </div>
            
        </div>
        </div>
    );
};

export default AllTask;