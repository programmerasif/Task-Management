import { FaBan } from 'react-icons/fa';
import { deleteTodo, makeDoingDone } from '../share/common';
import { FaCheck } from 'react-icons/fa6';

import useDoing from '../share/useDoing';
import Swal from 'sweetalert2';
import Popup from 'reactjs-popup';
import UpdatedIem from './UpdatedIem';

const Doing = () => {
  const [doing, refetchDoing] = useDoing();

  const handleDelete = (id, refetchDoing) => {
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
        deleteTodo(id, refetchDoing);
        refetchDoing();

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  const handleDone = (id, refetchDoing) => {
    makeDoingDone(`http://localhost:5000/makeDone/${id}`, refetchDoing, 'done');
    refetchDoing();
  };

  return (
    <>
      <div className="bg-[#00000042] rounded-md text-center h-full text-white">
        <h5 className="text-2xl font-semibold border-b-2 border-[#00000079] py-5">
          Doing - {`(${doing.length})`}
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {doing.map((item, index) => (
            <div key={item._id}>
              <div className="w-[28rem] px-5 mx-auto p-5 rounded-md mt-5 mb-0 hover:bg-[#00000032] bg-[#0000005f] duration-200">
                <h5 className="text-start text-xl mb-2">{index + 1}. {item.title}</h5>
                <h5 className="text-start text-gray-300 text-xs">
                  {item.description}...{' '}
                  <span className="text-blue-600">
                    <Popup
                      contentStyle={{
                        background: 'black',
                        color: 'white',
                        borderRadius: '10px',
                        border: 'none',
                        padding: '20px'
                      }}
                      trigger={
                        <span className="flex justify-start items-center text-xs lg:text-sm font-semibold">
                          See-more
                        </span>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal sm:h-full w-full mx-auto">
                          <div className="header text-2xl font-bold mb-3 text-center border-b-2 pb-2 border-white">
                            {item.title}
                          </div>
                          <div className="content flex justify-center items-center flex-col gap-8">
                            {item.description}
                            <button className="ring-2 px-6 py-3 rounded-md" onClick={close}>
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </span>
                </h5>
                <div className="text-sm font-bold mt-3 text-black flex justify-between items-center gap-2">
                  <button className={`px-6 py-2 rounded-full ${item.status === 'done' || item.status === 'doing' ? 'bg-gray-400' : 'bg-white'}`}>
                    Doing
                  </button>
                  <button className={`bg-white px-6 py-2 rounded-full ${item.status === 'done' ? 'bg-gray-400' : 'bg-white'}`}>
                    {item.status === 'done' ? (
                      <span className="text-green-800 text-xl font-bold">
                        <FaCheck />
                      </span>
                    ) : (
                      <span className="text-xs" onClick={() => handleDone(item._id, refetchDoing)}>
                        Make-Done
                      </span>
                    )}
                  </button>
                  <Popup
                    contentStyle={{
                      background: 'black',
                      color: 'white',
                      borderRadius: '10px',
                      border: 'none',
                      padding: '20px'
                    }}
                    trigger={
                      <span className="bg-white px-3 text-green-500 py-2 rounded-full text-xs hover:bg-green-600 hover:text-white duration-300 font-bold">
                        <div className="flex justify-start items-center">Update</div>
                      </span>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal sm:h-full mx-auto">
                        <div className="header"> </div>
                        <div className="w-full content flex justify-center items-center flex-col">
                          <button className="ring-2 px-6 py-3 rounded-full absolute top-0 right-0" onClick={close}>
                            X
                          </button>
                          <UpdatedIem id={item._id} />
                        </div>
                      </div>
                    )}
                  </Popup>
                  <button className="bg-white px-6 text-red-500 py-2 rounded-full text-xl hover:bg-red-600 hover:text-white duration-300" onClick={() => handleDelete(item._id, refetchDoing)}>
                    <FaBan />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doing;
