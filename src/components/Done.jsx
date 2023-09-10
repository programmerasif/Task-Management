import { FaBan } from 'react-icons/fa';
import { deleteTodo} from '../share/common';
import useDone from '../share/useDone';
import Swal from 'sweetalert2';
import UpdatedIem from './UpdatedIem';
import Popup from 'reactjs-popup';
const Done = () => {

    const [done, refetchDone] = useDone()
    

    const handelDelet = (id,refetchDone) =>{
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

                deleteTodo(id,refetchDone)
                 refetchDone()

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
            
        }
        
       
        
    return (
        <>
        <div className="bg-[#00000042]  rounded-md text-center h-full text-white">
            <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">Done - {`(${done.length})`}</h5>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">

            {
                    done.map((item,index) => <div key={item._id}>
                   <div className="w-[28rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                   <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">{item.description}... <button className="text-blue-600" >
                

 <Popup
 contentStyle={{ background: 'black', color: "white", borderRadius: "10px", border: "none", padding: "20px"}}
      trigger={<button className="flex justify-start items-center text-xs lg:text-sm font-semibold" > See-more </button>}
        modal
        nested
    >
    {close => (
         <div className="modal sm:h-full w-full  mx-auto ">
                                            
      <div className="header text-2xl font-bold mb-3 text-center border-b-2 pb-2 border-white"> {item.title}</div>
      <div className="content flex justify-center items-center flex-col gap-8">
           {
             item.description
           }
          <span className="ring-2 px-6 py-3 rounded-md" onClick={close}> close</span>
         </div>
                                            
         </div>
     )}
</Popup>
                    
                    </button></h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-center items-center gap-5">
                    
                    <button className="bg-gray-400 px-12 py-2 rounded-full" disabled>Done</button>
                    <Popup
                    contentStyle={{ background: 'black', color: "white", borderRadius: "10px", border: "none", padding: "20px"}}
                trigger={<button className="bg-white px-3 text-green-500 py-2 rounded-full text-xs hover:bg-green-600 hover:text-white duration-300 font-bold" >  <div className="flex justify-start items-center">
                           Update
                      </div> </button>}
                  modal
                 nested
             >
                 {close => (
                     <div className="modal sm:h-full mx-auto ">
                                            
                         <div className="header"> </div>
                           <div className="w-full content flex justify-center items-center flex-col">
                                             
                                                
                           <button className="ring-2 px-6 py-3 rounded-full absolute top-0 right-0" onClick={close} > X</button>
                            <UpdatedIem  id={item._id}/>
                          </div>
                                            
                     </div>
                  )}
            </Popup>
                    <button className="bg-white px-4 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handelDelet(item._id,refetchDone)} > <FaBan/> </button>
                </div>
            </div>
                    </div>)
                }
            
            
            </div>
            
        </div>
        </>
    );
};
export default Done;