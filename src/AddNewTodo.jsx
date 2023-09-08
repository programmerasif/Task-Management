


const AddNewTodo = () => {

    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target
        const title = form.title.value
        const description = form.description.value
        // Adding new Todo
       const data = {
        title,
        description,
        status: "todo"
       }


    //    fetching 
    const url = 'http://localhost:5000/addTask';
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
console.log('Response Data:', data);
})
.catch(error => {
console.error('Error:', error);
});
    }
    return (
       
            
                <form onSubmit={handleSubmit} className='w-[70%] flex justify-center gap-2'>
                <input type="text"  className='bg-[#00000083] text-white w-[50%] rounded-s-md px-8 py-4 ' placeholder='Add Title' name="title"/>
                <input type="text"  className='bg-[#00000083] text-white w-[50%] rounded-s-md px-8 py-4 ' placeholder='Add Description' name="description"/>
                <button type="submit" value="Add Todo" className='bg-[#00000083] text-white rounded-md px-8 py-4'>Submit</button>
                </form>
    
        
    );
};

export default AddNewTodo;