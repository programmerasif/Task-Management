import { FaBan } from "react-icons/fa";
import { deleteTodo, makeDoingDone } from "../share/common";
import { FaCheck } from "react-icons/fa6";

import useDoing from "../share/useDoing";
import Swal from "sweetalert2";


const Doing = () => {
    
    const [doing, refrtchDoing] = useDoing()
    

    const handelDelet = (id,refrtchDoing) =>{

        
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

                deleteTodo(id,refrtchDoing)
                 refrtchDoing()

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        
    }

    const handelDone = (id,refrtchDoing) =>{
        makeDoingDone(`http://localhost:5000/makeDone/${id}`,refrtchDoing)
        refrtchDoing()
        
    }
    const handelUpdate = () =>{}
    return (
        <>
       <div className="bg-[#00000042]  rounded-md text-center h-full  text-white">
            <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">Doing - {`(${doing.length})`}</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">

            {
                    doing.map((item,index) => <>
                   <div className="w-[28rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">{item.description}... <button className="text-blue-600">See-more</button></h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-between items-center gap-2">
                    <button className={`px-6 py-2 rounded-full ${item.status == 'done' || item.status == 'doing' ? "bg-gray-400" : "bg-white"}`}>Doing</button>
                    <button className={`bg-white px-6 py-2 rounded-full ${item.status == 'done' ? "bg-gray-400" : "bg-white"}`}>{
                        item.status == "done" ? <span className={`text-green-800 text-xl font-bold `}><FaCheck /></span> : <span className="text-xs" onClick={() => handelDone(item._id,refrtchDoing)}>Make-Done</span>
                    }</button>
                    <button className="bg-white px-3 text-red-500 py-2 rounded-full text-xs hover:bg-red-600 hover:text-white duration-300 font-bold" onClick={() => handelUpdate(item._id)} > Update</button>
                    <button className="bg-white px-6 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handelDelet(item._id,refrtchDoing)} > <FaBan/> </button>
                    
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