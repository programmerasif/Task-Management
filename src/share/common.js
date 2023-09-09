export const deleteTodo = (id,refetch) =>{
    fetch(`http://localhost:5000/delete/${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }})
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if (refetch) {
            refetch()
          }
        })
}

export const makeDoingDone = (Url,refetch) =>{
  const url = Url;
  const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json', 
      },
    };

  fetch(url, requestOptions)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if (refetch) {
      refetch()
    }
  })
}
