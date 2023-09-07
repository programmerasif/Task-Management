
import AllTask from './components/AllTask'
import Doing from './components/Doing'
import Done from './components/Done'
import Todo from './components/Todo'

function App() {
  

  return (
    <>
    <h5 className='text-sky-800 uppercase bg-white text-center p-5 font-bold text-4xl '>Task management </h5>
     <section className='w-[80%] mx-auto'>
     

     <div className='flex justify-center items-center mt-24 gap-4'>
     <input type="text"  className='bg-[#00000083] text-white rounded-s-md w-[70%] px-8 py-4 ' placeholder='Add new Todo...'/>
     <button className='bg-[#00000083] text-white rounded-md px-8 py-4'>Adde TODO</button>
     </div>
     <div className='flex justify-center items-center mt-5 gap-5'>
     
      <AllTask />
     <Todo />
     <Doing />
     <Done />
     </div>
     </section>

    </>
  )
}

export default App
