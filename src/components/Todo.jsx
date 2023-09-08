import { FaBan, FaCheck } from "react-icons/fa";
import { deleteTodo, makeDoingDone } from "../share/common";
import useGetTodo from "../share/useGetTodo";


const Todo = () => {
    // const [data,setData] = useState([])
    const [data, refatch] = useGetTodo(`http://localhost:5000/todo`)


    const handelDelet = (id) =>{
        // delete
            deleteTodo(id)
            refatch()
        }
    
        const handelDoing = (id) =>{
            // Doing
            makeDoingDone(`http://localhost:5000/makeDoing/${id}`)
            refatch()
        }
        const handelDone = (id) =>{
            // Done
            makeDoingDone(`http://localhost:5000/makeDone/${id}`)
            refatch()
        }

    return (
        <>
        <div className="bg-[#00000042]  rounded-md text-center h-full w-96 text-white">
            <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">Todo</h5>
            
            <div className="flex flex-col">

            {
                    data.map((item,index) => <>
                   <div className="w-[22rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">{item.description}... <button className="text-blue-600">See-more</button></h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-between items-center gap-2">
                    <button  className={`px-4 py-2 rounded-full ${item.status ? "bg-gray-400" : "bg-white"}`} disabled={item.status}>Todo</button>
                    <button className={`px-4 py-2 rounded-full ${item.status == 'done' || item.status == 'doing' ? "bg-gray-400" : "bg-white"}`} onClick={() => handelDoing(item._id)}>Doing</button>
                    <button className={`bg-white px-4 py-2 rounded-full ${item.status == 'done' ? "bg-gray-400" : "bg-white"}`}>{
                        item.status == "done" ? <span className={`text-green-800 text-xl font-bold `}><FaCheck /></span> : <span className="text-xs" onClick={() => handelDone(item._id)}>Make-Done</span>
                    }</button>
                    <button className="bg-white px-4 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handelDelet(item._id)} > <FaBan/> </button>
                    
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