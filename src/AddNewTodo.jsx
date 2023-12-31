import useAllTodo from "./share/useAllTodo";
import useTodo from "./share/useTodo";


const AddNewTodo = () => {
const [ ,refetch] = useAllTodo()
const [ ,totoRefetch] = useTodo()
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target
        let title = form.title.value
        let description = form.description.value
        // Adding new Todo
       const data = {
        title,
        description,
        status: "todo"
       }


    //    fetching 
    const url = 'https://task-managemant-server.vercel.app/addTask';
    const requestOptions = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), 
      };

    fetch(url, requestOptions)
.then(response => {

if (response.ok) {
  return response.json(); 
} else {
  throw new Error('Failed to post data');
}
})
.then(data => {
  form.title.value = '';
  form.description.value = '';
console.log('Response Data:', data);
refetch()
totoRefetch()
})
.catch(error => {
console.error('Error:', error);
});
    }
    return (
       
            
                <form onSubmit={handleSubmit} className='w-[70%] flex justify-center flex-col lg:flex-row gap-2'>
                <input type="text" required  className='bg-[#00000083] text-white  lg:w-[50%] rounded-s-md px-8 py-4 ' placeholder='Add Title' name="title"/>
                <input type="text" required  className='bg-[#00000083] text-white lg:w-[50%] rounded-s-md px-8 py-4 ' placeholder='Add Description' name="description"/>
                <button type="submit" value="Add Todo" className='bg-[#00000083] text-white rounded-md px-8 py-4'>Submit</button>
                </form>
    
        
    );
};

export default AddNewTodo;