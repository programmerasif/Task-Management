export const deleteTodo = (id) =>{
    fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }})
        .then(res => res.json())
        .then(data =>console.log(data))
}

export const makeDoingDone = (Url) =>{
  const url = Url;
  const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json', 
      },
    };

  fetch(url, requestOptions)
  .then(res => res.json())
  .then(data => console.log(data))
}
