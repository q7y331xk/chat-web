import type { NextPage } from 'next'
import { useEffect } from 'react'
import { io } from 'socket.io-client'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const socket = io('http://localhost:3201/chat', { transports: ['websocket']});
  socket.on('connect', () => {
    console.log('Connected');
  });
  socket.emit('startChat', { chat: { id: 1, me: 'dulee', opponent: 'eunJi '} })
  socket.on('disconnect', function() {
    console.log('Disconnected');
  });
  socket.on('startChat', function(data) {
    console.log('Disconnected');
    console.log(data);
  });
  const sendChat = () =>  {
    socket.emit('clientToServer', { test: 'test' }, response => {
      console.log(response);
    });
  }
  const who = () =>  {
    socket.emit('whoAreThere', { test: 'test' }, response => {
      console.log(response);
    });
  }
  return (
    <div className={styles.container}>
      asdf
      <button onClick={() => sendChat()}>sendChat</button>
      <button onClick={() => who()}>Who?</button>
    </div>
  )
}

export default Home
