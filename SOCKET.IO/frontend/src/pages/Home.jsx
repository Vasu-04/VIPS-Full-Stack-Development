import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {

    const [roomName, setRoomName] = useState("")
    const [openModel, setopenModel] = useState(false)
    useEffect(() => {
        getRoom()
    }, [])
    const getRoom = async () => {
        await axios.get("http://localhost:3000/allRoom")
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post("http://localhost:3000/create", { roomName })
            .then((res) => {
                console.log(res)
                getRoom()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <button onClick={() => { setopenModel(true) }}>Create Room</button>
            {
                openModel && <div className="roomForm">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Room Name' name='room' id="" value={roomName} onChange={(e) => setRoomName(e.target.value)}></input>
                        <button>Submit</button>
                    </form>
                </div>
            }

        </div>
    )
}

export default Home
