import { useEffect, useState } from "react";
import { FaBan } from "react-icons/fa";
import { deleteTodo, makeDoingDone } from "../share/common";
import { FaCheck } from "react-icons/fa6";


const Doing = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/doing')
        .then(res => res.json())
        .then(data =>setData(data) )
    },[])

    const handelDelet = (id) =>{
        deleteTodo(id)
    }

    const handelDone = (id) =>{
        makeDoingDone(`http://localhost:5000/makeDone/${id}`)
    }
    return (
        <>
       <div className="bg-[#00000042]  rounded-md text-center h-full w-96 text-white">
            <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">Doing</h5>
            
            <div className="flex flex-col">

            {
                    data.map((item,index) => <>
                   <div className="w-[22rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">{item.description}... <button className="text-blue-600">See-more</button></h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-between items-center gap-2">
                    <button className={`px-6 py-2 rounded-full ${item.status == 'done' || item.status == 'doing' ? "bg-gray-400" : "bg-white"}`}>Doing</button>
                    <button className={`bg-white px-6 py-2 rounded-full ${item.status == 'done' ? "bg-gray-400" : "bg-white"}`}>{
                        item.status == "done" ? <span className={`text-green-800 text-xl font-bold `}><FaCheck /></span> : <span className="text-xs" onClick={() => handelDone(item._id)}>Make-Done</span>
                    }</button>
                    <button className="bg-white px-6 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handelDelet(item._id)} > <FaBan/> </button>
                    
                </div>
            
            </div>
                    </>)
                }
            
            
            </div>
            
        </div>
        </>
    );
};

export default Doing;