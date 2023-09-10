
import AddNewTodo from './AddNewTodo'
import AllTask from './components/AllTask'
import Doing from './components/Doing'
import Done from './components/Done'
import Todo from './components/Todo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css'

function App() {
  

  return (
    <>
    <h5 className='text-sky-800 uppercase bg-white text-center p-5 font-bold text-2xl md:text-3xl lg:text-4xl '>Task management </h5>
     <section className='w-full lg:w-[80%] mx-auto'>
     

     <div className='flex justify-center items-center mt-24 gap-4 '>
     <AddNewTodo />
     
     </div>
     <div className='flex  mx-auto justify-center items-start mt-5 mb-5 gap-5'>
     <Tabs>
   <div className='text-center text-white font-bold lg:text-2xl bg-[#0000006b]'>
   <TabList>
      <Tab>All Task</Tab>
      <Tab>Todo</Tab>
      <Tab>Doing</Tab>
      <Tab>Done</Tab>
    </TabList>
   </div>

    <TabPanel>
    <AllTask />
    </TabPanel>

    <TabPanel>
    <Todo />
    </TabPanel>

    <TabPanel>
    <Doing />
    </TabPanel>

    <TabPanel>
    <Done />
    </TabPanel>

  </Tabs>
      
     
    
     
     </div>
     </section>

    </>
  )
}

export default App
