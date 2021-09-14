import React, { useState } from 'react'

const MainContext = React.createContext()

const MainProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [rooms, setRooms] = useState([]);

    return (
        <MainContext.Provider value={{ name, rooms, room, setName, setRooms, setRoom }}>
            {children}
        </MainContext.Provider>
    )
}

export { MainContext, MainProvider } 