import React, { useState } from 'react';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [rooms, setRooms] = useState([]);
    const [settings, setSettings] = useState({});

    return (
        <MainContext.Provider value={{ name, rooms, room, settings, setName, setRooms, setRoom, setSettings }}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainProvider };
