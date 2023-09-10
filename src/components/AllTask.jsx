import { FaBan } from "react-icons/fa";
import { deleteTodo, makeDoingDone } from "../share/common";
import { FaCheck } from "react-icons/fa6";
import useAllTodo from "../share/useAllTodo";
import Swal from "sweetalert2";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UpdatedIem from "./UpdatedIem";

const AllTask = () => {
  const [allTodo, refetch] = useAllTodo()

  const handelDelet = (id, refetch) => {
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
        deleteTodo(id, refetch)
        refetch()
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  const handelDoing = (id, refetch) => {
    // Doing
    makeDoingDone(`http://localhost:5000/makeDoing/${id}`, refetch, "doing")
    refetch()
  }

  const handelDone = (id, refetch) => {
    // Done
    makeDoingDone(`http://localhost:5000/makeDone/${id}`, refetch, "done")
    refetch()
  }

  return (
    <div>
      <div className="bg-[#00000042] rounded-md text-center h-full text-white">
        <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">All-Task - {`(${allTodo.length})`}</h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {allTodo.map((item, index) => (
            <div key={item._id}>
              <div className="lg:w-[28rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">{item.description}...
                  <button className="text-blue-600">
                    <Popup
                      contentStyle={{ background: 'black', color: "white", borderRadius: "10px", border: "none", padding: "20px" }}
                      trigger={
                        <span className="flex justify-start items-center text-xs lg:text-sm font-semibold"> See-more </span>
                      }
                      modal
                      nested
                    >
                      {close => (
                        <div className="modal sm:h-full w-full mx-auto">
                          <div className="header text-2xl font-bold mb-3 text-center border-b-2 pb-2 border-white"> {item.title}</div>
                          <div className="content flex justify-center items-center flex-col gap-8">
                            {item.description}
                            <button className="ring-2 px-6 py-3 rounded-md" onClick={close}> close</button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </button>
                </h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-between items-center gap-2">
                  <button className={`px-4 py-2 rounded-full ${item.status ? "bg-gray-400" : "bg-white"}`} disabled={item.status}>Todo</button>
                  <button className={`px-4 py-2 rounded-full ${item.status === 'done' || item.status === 'doing' ? "bg-gray-400" : "bg-white"}`} onClick={() => handelDoing(item._id,refetch)}>Doing</button>
                  <button className={`bg-white px-4 py-2 rounded-full ${item.status === 'done' ? "bg-gray-400" : "bg-white"}`}>
                    {item.status === "done" ? <span className={`text-green-800 text-xl font-bold `}><FaCheck /></span> :
                      <span className="text-xs" onClick={() => handelDone(item._id,refetch)}>Make-Done</span>
                    }
                  </button>
                  <Popup
                    contentStyle={{ background: 'black', color: "white", borderRadius: "10px", border: "none", padding: "20px" }}
                    trigger={
                      <button className="bg-white px-3 text-green-500 py-2 rounded-full text-xs hover:bg-green-600 hover:text-white duration-300 font-bold">
                        <div className="flex justify-start items-center">Update</div>
                      </button>
                    }
                    modal
                    nested
                  >
                    {close => (
                      <div className="modal sm:h-full mx-auto">
                        <div className="header"> </div>
                        <div className="w-full content flex justify-center items-center flex-col">
                          <button className="ring-2 px-6 py-3 rounded-full absolute top-0 right-0" onClick={close}> X</button>
                          <UpdatedIem id={item._id} refetch={refetch} />
                        </div>
                      </div>
                    )}
                  </Popup>
                  <button className="bg-white px-4 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handelDelet(item._id, refetch)} > <FaBan/> </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
