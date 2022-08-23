import type { NextPage } from 'next'
import { io } from 'socket.io-client'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const socket = io('http://localhost:3201/chat',{ transports: ['websocket'] });
  socket.on('connect', () => {
    console.log('Connected');
  });
  const sendChat = () =>  {
    socket.emit('clientToServer', { chatRoomId: 1, writer: 'dulee', createdAt: new Date(), message: "my first chat message" });
  }
  const who = () =>  {
    socket.emit('whoAreThere', { test: 'test' });
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
