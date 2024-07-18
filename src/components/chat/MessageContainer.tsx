import React from 'react'
import ChatBottomBar from './ChatBottomBar'
import ChatTopBar from './ChatTopBar'
import MessageList from './MessageList'

const MessageContainer = () => {
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
