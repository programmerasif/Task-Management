import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useDone = () => {

     
    const { refetch, data: done = []  } = useQuery({
        queryKey: ['done'],
        enabled: true,
        queryFn: async () =>{
           
           const res = await fetch(`http://localhost:5000/done`);
           const data = await res.json();
          return data;
        }
      })
      
      return [done, refetch]
};

export default useDone;