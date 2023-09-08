import { useQuery } from "@tanstack/react-query";

const useGetTodo = (url) => {

     
     const { refetch, data: data = []  } = useQuery({
         queryKey: ['data'],
         enabled: true,
         queryFn: async () =>{
            
            const res = await fetch(url);
            const data = await res.json();
           return data;
         }
       })
       return [data, refetch]
 };
  
  export default useGetTodo;