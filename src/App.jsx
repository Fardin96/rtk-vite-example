/* eslint-disable react/jsx-no-target-blank */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useDispatch, useSelector} from 'react-redux'

import { selectCount, increment, decrement } from './redux-toolkit/feature/counter/counter-slice'
import { useCreateEmpMutation, useGetEmpQuery, useGetOneEmpQuery } from './redux-toolkit/feature/employees-api/employees-api-slice'
import { useCreateTodoMutation, useGetTodosByIdQuery, useGetTodosQuery, useUpdateTodoMutation } from './redux-toolkit/feature/demo-api/demo-api-slice'

function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  
    // GET
    // const { data, isLoading, isError, error } = useGetEmpQuery()
    // const { data, isLoading, isError, error } = useGetOneEmpQuery(10)
    // if(data){
    //   console.log(JSON.stringify(data))
    // }

    // POST
    // const[createEmp] = useCreateEmpMutation()
    // const handleSubmit = async (e) => {

    //   // const data = {
    //   //   "name": "farabi", 
    //   //   "salary": "50000", 
    //   //   "age": "27"
    //   // }
    //   // const res = await createEmp(data)

    //   // const data = {
    //   //   name: "fardin", 
    //   //   salary: 100000, 
    //   //   age: 27
    //   // }
    //   // console.log(JSON.stringify(data))
    //   // const res = await createEmp(JSON.stringify(data))

    //   // const resData = await JSON.stringify(res)
      
    //   // console.log(res.data)
    //   // const response = JSON.stringify(res)
    //   // if(response.status === 'success'){
    //   //   console.log(response)
    //   // }
    // }

    // GET examples
    // const {data, isLoading, isError, error} = useGetTodosQuery()
    // const handleSubmit = async (e) => {
    //   e.preventDefault()

    //   if(data.code === 200){
    //     console.log("success: ", data.data)
    //   }else if(isError){
    //     console.log("error: ", error)
    //   }
    // }

    // const {data, isError, error} = useGetTodosByIdQuery('65b06c431defd893c9026234')
    // const handleSubmit = async (e) => {
    //   e.preventDefault()

    //   if(data.code === 200){
    //     console.log("data: ", data.data)
    //   }else if(isError){
    //     console.log("error: ", error)
    //   }
      
    // }

    // POST examples
    // const data = {
    //   todoName: "Learn RTK",
    //   isComplete: false
    // }

    // const [createTodo] = useCreateTodoMutation()
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
      
    //   try {
    //     //! dont require to convert to JSON.stringify()
    //     const response = await createTodo(data); 
    //     // console.log(data)
        
    //     if (response.error) {
    //       console.error("Error:", response.error);
    //     } else {
    //       // response.data.data -> actual data
    //       console.log("Success:", response.data.data);
    //     }
    //   } catch (error) {
    //     console.error("An error occurred:", error);
    //   }
    // };

    // PUT example
    const [createTodo] = useUpdateTodoMutation()
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        //! dont require to convert to JSON.stringify()
        const body = {
           id : "65b883eac1cf6aef391ad539",
           isComplete: true
        }
        const response = await createTodo(body); 
        // console.log(id)
        
        if (response.error) {
          console.error("Error:", response.error);
        } else if(response.code === 200){
          console.log("Success:", response.data);
        } 
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <button 
        onClick={e => handleSubmit(e)}
      >
        press
      </button>

      {/* <div className="card">
        <button 
        onClick={() => dispatch(increment())}
        >
        +
        </button>

        <p>
          {count}
        </p>

        <button 
        onClick={() => dispatch(decrement())}
        >
        -
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}

      <div>

      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
