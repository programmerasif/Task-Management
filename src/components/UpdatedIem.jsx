import Swal from "sweetalert2";
import useAllTodo from "../share/useAllTodo";
import useTodo from "../share/useTodo";
import useDoing from "../share/useDoing";
import useDone from "../share/useDone";


const UpdatedIem = (id) => {
    const [, refetch] = useAllTodo()
    const [ ,totoRefetch] = useTodo()
    const [, refrtchDoing] = useDoing()
    const [, refetchDone] = useDone()
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target
        const title = form.title.value
        const description = form.description.value
        // Adding new Todo
       const body = {
        title,
        description,
        id
       }
       const url = `https://task-managemant-server.vercel.app/makeUpdate`;
       const requestOptions = {
           method: 'PATCH',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(body),
         };
     
       fetch(url, requestOptions)
       .then(res => res.json())
       .then(data => {
         console.log(data)
         refetch()
         totoRefetch()
         refrtchDoing()
         refetchDone()
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Update successfull',
            showConfirmButton: false,
            timer: 1500
          })
       })
       form.title.value = '';
       form.description.value = '';
 }
    return (
        <div>
            <form onSubmit={handleSubmit} className=' flex flex-col justify-center gap-2'>

                                <label>Title</label>
                                <input type="text" required className='bg-[#00000083] w-full text-white border  rounded-s-md px-8 py-4 ' placeholder='Add Title' name="title"/>
                                <label>Description</label>
                                <input type="text" required className='bg-[#00000083] w-full text-white border rounded-s-md px-8 py-4 ' placeholder='Add Description' name="description"/>
                                <div className="flex justify-center items-center gap-5">
                            <button  type="Update" className="ring-2 px-6 py-3 rounded-md" > Update</button>
                            </div>
                            </form>
        </div>
    );
};

export default UpdatedIem;