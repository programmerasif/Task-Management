import { useQuery } from '@tanstack/react-query';

const useDone = () => {

     
    const { refetch:refetchDone, data: done = []  } = useQuery({
        queryKey: ['done'],
        enabled: true,
        queryFn: async () =>{
           
           const res = await fetch(`https://task-managemant-server.vercel.app/done`);
           const data = await res.json();
          return data;
        }
      })
      
      return [done, refetchDone]
};

export default useDone;