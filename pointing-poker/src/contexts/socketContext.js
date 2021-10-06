import React from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext();

const SocketProvider = ({ children }) => {
  // const ENDPOINT = 'https://socket-chat-ak.herokuapp.com/';
  const ENDPOINT = 'https://team25.herokuapp.com/';
  const socket = io(ENDPOINT, {
    transports: ['websocket', 'polling'],
    rejectUnauthorized: false,
  });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
