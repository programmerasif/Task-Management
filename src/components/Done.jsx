import { FaBan } from 'react-icons/fa';
import { deleteTodo} from '../share/common';
import useDone from '../share/useDone';
const Done = () => {

    const [done, refetch] = useDone()
    

    const handelDelet = (id,refetch) =>{
        // delete
            deleteTodo(id,refetch)
        }
    
       
        
    return (
        <>
        <div className="bg-[#00000042]  rounded-md text-center h-full text-white">
            <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">Done - {`(${done.length})`}</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">

            {
                    done.map((item,index) => <>
                   <div className="w-[22rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">{item.description}... <button className="text-blue-600" >See-more</button></h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-center items-center gap-5">
                    
                    <button className="bg-gray-400 px-12 py-2 rounded-full" disabled>Done</button>
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
export default Done;