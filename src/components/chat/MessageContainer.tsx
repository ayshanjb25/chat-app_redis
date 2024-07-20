import { useSelectedUser } from '@/store/useSelectedUser'
import React, { useEffect } from 'react'
import ChatBottomBar from './ChatBottomBar'
import ChatTopBar from './ChatTopBar'
import MessageList from './MessageList'

const MessageContainer = () => {
  const {setSelectedUser } = useSelectedUser();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) =>{
      if(e.key === "Escape") setSelectedUser(null);
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
    }, [setSelectedUser])
  return (
    <div className='flex flex-col justify-between w-full h-full'>
        <ChatTopBar/>

        <div className='flex flex-col w-full h-full overflow-y-auto overflow-x-hidden'>
        <MessageList/>
        <ChatBottomBar/>

        </div>
      
    </div>
  )
}

export default MessageContainer
