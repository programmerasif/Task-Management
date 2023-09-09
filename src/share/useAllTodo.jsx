import { useQuery } from '@tanstack/react-query';

const useAllTodo = () => {

     
    const { refetch, data: allTodo = []  } = useQuery({
        queryKey: ['allTodo'],
        enabled: true,
        queryFn: async () =>{
           
           const res = await fetch(`http://localhost:5000/allTask`);
           const data = await res.json();
          return data;
        }
      })
      
      return [allTodo, refetch]
};

export default useAllTodo;