
import { FaBan, FaCheck } from "react-icons/fa";
import { deleteTodo, makeDoingDone } from "../share/common";
import useTodo from "../share/useTodo";


const Todo = () => {
    const [todo, refetch] = useTodo()
    

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
        <>
        <div className="bg-[#00000042]  rounded-md text-center h-full  text-white">
            <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">Todo - {`(${todo.length})`}</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">

            {
                    todo.map((item,index) => <>
                   <div className="w-[22rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">{item.description}... <button className="text-blue-600">See-more</button></h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-between items-center gap-2">
                    <button  className={`px-4 py-2 rounded-full ${item.status ? "bg-gray-400" : "bg-white"}`} disabled={item.status}>Todo</button>
                    <button className={`px-4 py-2 rounded-full ${item.status == 'done' || item.status == 'doing' ? "bg-gray-400" : "bg-white"}`} onClick={() => handelDoing(item._id,refetch)}>Doing</button>
                    <button className={`bg-white px-4 py-2 rounded-full ${item.status == 'done' ? "bg-gray-400" : "bg-white"}`}>{
                        item.status == "done" ? <span className={`text-green-800 text-xl font-bold `}><FaCheck /></span> : <span className="text-xs" onClick={() => handelDone(item._id,refetch)}>Make-Done</span>
                    }</button>
                    <button className="bg-white px-4 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handelDelet(item._id,refetch)} > <FaBan/> </button>
                    
                </div>
            
            </div>
                    </>)
                }
            
            
            </div>
            
        </div>
        </>
    );
};

export default Todo;



// import { useEffect, useState } from "react";
// import { FaBan, FaCheck } from "react-icons/fa";
// import { deleteTodo, makeDoingDone } from "../share/common";
// import useGetTodo from "../share/useGetTodo";


// const Todo = () => {
//     // const [todo,settodo] = useState([])
//     const [todo, refetch] = useGetTodo(`http://localhost:5000/todo`)
//     // useEffect(() =>{
//     //     fetch('http://localhost:5000/todo')
//     //     .then(res => res.json())
//     //     .then(todo =>settodo(todo) )
//     // },[])

//     const handelDelet = (id,refetch) =>{
//         // delete
//             deleteTodo(id,refetch)
//         }
    
//         const handelDoing = (id,refetch) =>{
//             // Doing
//             makeDoingDone(`http://localhost:5000/makeDoing/${id}`,refetch)
//         }
//         const handelDone = (id,refetch) =>{
//             // Done
//             makeDoingDone(`http://localhost:5000/makeDone/${id}`,refetch)
//         }

//     return (
//         <>
//         <div className="bg-[#00000042]  rounded-md text-center h-full w-96 text-white">
//             <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">Todo</h5>
            
//             <div className="flex flex-col">

//             {
//                     todo.map((item,index) => <>
//                    <div className="w-[22rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
//                 <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
//                 <h5 className="text-start text-gray-300 text-xs">{item.description}... <button className="text-blue-600">See-more</button></h5>
//                 <div className="text-sm font-bold mt-3 text-black flex justify-between items-center gap-2">
//                     <button  className={`px-4 py-2 rounded-full ${item.status ? "bg-gray-400" : "bg-white"}`} disabled={item.status}>Todo</button>
//                     <button className={`px-4 py-2 rounded-full ${item.status == 'done' || item.status == 'doing' ? "bg-gray-400" : "bg-white"}`} onClick={() => handelDoing(item._id,refetch)}>Doing</button>
//                     <button className={`bg-white px-4 py-2 rounded-full ${item.status == 'done' ? "bg-gray-400" : "bg-white"}`}>{
//                         item.status == "done" ? <span className={`text-green-800 text-xl font-bold `}><FaCheck /></span> : <span className="text-xs" onClick={() => handelDone(item._id,refetch)}>Make-Done</span>
//                     }</button>
//                     <button className="bg-white px-4 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handelDelet(item._id,refetch)} > <FaBan/> </button>
                    
//                 </div>
            
//             </div>
//                     </>)
//                 }
            
            
//             </div>
            
//         </div>
//         </>
//     );
// };

// export default Todo;