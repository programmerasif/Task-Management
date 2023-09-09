
import { FaBan, FaCheck } from "react-icons/fa";
import { deleteTodo, makeDoingDone } from "../share/common";
import useTodo from "../share/useTodo";
import Swal from "sweetalert2";


const Todo = () => {
    const [todo, totoRefetch] = useTodo()
    

    const handelDelet = (id,totoRefetch) =>{
        // delete
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                deleteTodo(id,totoRefetch)
                 totoRefetch()

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        }
    
        const handelDoing = (id,totoRefetch) =>{
            // Doing
            makeDoingDone(`http://localhost:5000/makeDoing/${id}`,totoRefetch)
            totoRefetch()
        }
        const handelDone = (id,totoRefetch) =>{
            // Done
            makeDoingDone(`http://localhost:5000/makeDone/${id}`,totoRefetch)
            totoRefetch()
        }
        const handelUpdate = () =>{}

    return (
        <>
        <div className="bg-[#00000042]  rounded-md text-center h-full  text-white">
            <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">Todo - {`(${todo.length})`}</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">

            {
                    todo.map((item,index) => <>
                   <div className="w-[28rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">{item.description}... <button className="text-blue-600">See-more</button></h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-between items-center gap-2">
                    <button  className={`px-3 py-2 rounded-full ${item.status ? "bg-gray-400" : "bg-white"}`} disabled={item.status}>Todo</button>
                    <button className={`px-3 py-2 rounded-full ${item.status == 'done' || item.status == 'doing' ? "bg-gray-400" : "bg-white"}`} onClick={() => handelDoing(item._id,totoRefetch)}>Doing</button>
                    <button className={`bg-white px-3 py-2 rounded-full ${item.status == 'done' ? "bg-gray-400" : "bg-white"}`}>{
                        item.status == "done" ? <span className={`text-green-800 text-xl font-bold `}><FaCheck /></span> : <span className="text-xs" onClick={() => handelDone(item._id,totoRefetch)}>Make-Done</span>
                    }</button>
                    <button className="bg-white px-3 text-red-500 py-2 rounded-full text-xs hover:bg-red-600 hover:text-white duration-300 font-bold" onClick={() => handelUpdate(item._id)} > Update</button>
                    <button className="bg-white px-3 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handelDelet(item._id,totoRefetch)} > <FaBan/> </button>
                    
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


