import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Home.css"

const Home = () => {

    useEffect(() => {
      getRoom()
    }, [])
    
    const [roomName, setroomName] = useState("")
    const [openModal, setopenModal] = useState(false)
    const [roomData, setroomData] = useState([])


    const getRoom = async()=>{
        await axios.get("http://localhost:3000/allroom")
        .then((res)=>{
            console.log(res);
            setroomData(res.data.rooms)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3000/create", {roomName})
        .then((res)=>{
            console.log(res);
            getRoom()
            setopenModal(false)
            setroomName("")
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }


  return (
    <div className='main'>
      <button onClick={()=>{setopenModal(true)}}>Create Room</button>
      {
        openModal && <div className="roomform">
        <form onSubmit={handleSubmit}>
            <input type="text" name="room" id="" 
            value={roomName}
            onChange={(e)=>{setroomName(e.target.value)}}
            />
            <button>Create</button>
        </form>
      </div>
      }

  
        {
            roomData.map((elem , index)=>{
                return <div className='room' key={index}>
                    {elem.name}
                </div>
            })
        }
   
    </div>
  )
}

export default Home