import { useQuery } from '@tanstack/react-query';

const useDone = () => {

     
    const { refetch:refetchDone, data: done = []  } = useQuery({
        queryKey: ['done'],
        enabled: true,
        queryFn: async () =>{
           
           const res = await fetch(`http://localhost:5000/done`);
           const data = await res.json();
          return data;
        }
      })
      
      return [done, refetchDone]
};

export default useDone;