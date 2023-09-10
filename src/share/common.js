import Swal from "sweetalert2"

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

export const makeDoingDone = (Url,refetch,status) =>{
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

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `${status == 'doing' ? 'Task is Doing': 'Task is Done '}`,
      showConfirmButton: false,
      timer: 1500
    })

    if (refetch) {
      refetch()
    }
  })
}
