import React from 'react'
import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './UseStateHook.css'
import BrandFilter from './BrandFilter.jsx'
import TodoProject from './TodoProject.jsx'

var countVar = 0;
var textDisplay = "";

const products = [{ id: "1", item: "Shirts" }, { id: "2", item: "pants" }, { id: "3", item: "T-Shirts" }, { id: "4", item: "Jeans" }]


const onBtnClick = () => {
    countVar += 1;
    console.log(countVar);
}
const onSearchChange = (event) => {
    console.log(event.target.value);
    textDisplay = event.target.value;
}


function AddButton(props) {
    const AddValue = () => {
        props.setValue(props.value + 1);
    }
    return (
        <button onClick={AddValue}>Add</button>
    )
}
function DeleteButton(props) {
    const DeleteValue = () => {
        props.setValue(props.value - 1);
    }
    return (
        <button onClick={DeleteValue}>Delete</button>
    )
}


const UseStateHook = () => {
    const formData = {
        name: "",
        email: "",
        password: ""
    }
    //creating a data object thar stores the formdata where the initialstate is formData object 
    const [data, setData] = useState(formData)
    const onNameChange = (event) => {
        setData({ ...data, name: event.target.value })
    }
    const onEmailChange = (event) => {
        setData({ ...data, email: event.target.value })
    }
    const onPasswordChange = (event) => {
        setData({ ...data, password: event.target.value })
    }
    //printing the data each time when event occurs
    console.log(data)

    const [value, setValue] = useState(0);


    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count + 1);//count tha value by 1 , if we write three same line setCount then it won't increase the value of count variable by 3 as all three setCount fucntions would use the current value of count not the previous one.
        setCount((prev) => {
            return prev + 1;
        })// this function takes the previous value and if you write three same handlers then it will increment the vakue by 3 
        setCount((prev) => {
            return prev + 1;
        })//in this case , where we write the same logic twice , it will show an increment of 3 and this is called as something batch update.
    }
    const Decrement = () => {
        setCount(count - 1);
    }


    return (



        <>
            <div>
                <button onClick={onBtnClick}>Increment</button>
                {countVar}
            </div>
            <div>
                <input type='text' placeholder='Enter Something...' onChange={onSearchChange}></input>
                {textDisplay}
            </div>
            <hr></hr>
            {/* How do we just render a list */}
            <div>
                <ul>
                    {
                        products.map(product => {
                            return <li key={product.id} className={product.id % 2 !== 0 ? "listItemBgColor listItemMargin" : "listItemMargin"} >{product.item}</li> // conditional Rendering
                        })
                    }
                </ul>
            </div>
            <hr></hr>
            {/* Concept of HOOK */}
            <div>
                <p>{count}</p>
                <button onClick={Increment}>INCREMENT</button>
                <button onClick={Decrement}>DECREMENT</button> {/* When ever we are clicking on any button changing some value in state variable , it chnages but also the variable countVar also changes due to the rerendering of the countVar JSX , when wver an event occured a new dom i s created and then all the chnages are being made and compare before rendering it on view*/}
            </div>
            <hr></hr>
            {/* Concep OF PROP */}

            <p>The value is {value}</p>
            <AddButton value={value} setValue={setValue} />
            <DeleteButton value={value} setValue={setValue} />

            <hr></hr>
            {/* Taking FORM DATA */}
            <form>
                <div>
                    <label>Name :</label>
                    <input onChange={onNameChange} placeholder='Enter your Name : '></input>
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={onEmailChange} placeholder='Enter your Email :'></input>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={onPasswordChange} placeholder='Enter your Password :'></input>
                </div>
            </form>

            <hr></hr>
            {/* an Exercise to filter out the brand names */}
            <BrandFilter />

            <hr></hr>
            {/* an Exercise to make a ToDo MINI PROJECT */}
            <TodoProject />
        </>
    )
}

export default UseStateHook
