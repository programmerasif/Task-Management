import { useQuery } from '@tanstack/react-query';



const useDoing = () => {

     
    const { refetch : refrtchDoing, data: doing = []  } = useQuery({
        queryKey: ['data'],
        enabled: true,
        queryFn: async () =>{
           
           const res = await fetch(`http://localhost:5000/doing`);
           const data = await res.json();
          return data;
        }
      })
      
      return [doing, refrtchDoing]
};

export default useDoing;