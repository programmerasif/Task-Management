import { useQuery } from "@tanstack/react-query";

const useTodo = () => {

     
     const { refetch:totoRefetch, data: todo = []  } = useQuery({
         queryKey: ['todo'],
         enabled: true,
         queryFn: async () =>{
            
            const res = await fetch(`https://task-managemant-server.vercel.app/todo`);
            const data = await res.json();
           
           return data;
         }
       })
      
       return [todo, totoRefetch]
 };
  
  export default useTodo;