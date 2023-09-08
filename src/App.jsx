
import AddNewTodo from './AddNewTodo'
import AllTask from './components/AllTask'
import Doing from './components/Doing'
import Done from './components/Done'
import Todo from './components/Todo'

function App() {
  

  return (
    <>
    <h5 className='text-sky-800 uppercase bg-white text-center p-5 font-bold text-4xl '>Task management </h5>
     <section className='w-[80%] mx-auto'>
     

     <div className='flex justify-center items-center mt-24 gap-4 '>
     <AddNewTodo />
     
     </div>
     <div className='flex justify-center items-start mt-5 mb-5 gap-5'>
     
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
