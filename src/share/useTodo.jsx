import { useQuery } from "@tanstack/react-query";

const useTodo = () => {

     
     const { refetch:totoRefetch, data: todo = []  } = useQuery({
         queryKey: ['todo'],
         enabled: true,
         queryFn: async () =>{
            
            const res = await fetch(`http://localhost:5000/todo`);
            const data = await res.json();
           
           return data;
         }
       })
      
       return [todo, totoRefetch]
 };
  
  export default useTodo;