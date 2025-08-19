import ChatMessage from './ChatMessage'
import { forwardRef } from 'react'

const NeyroChat = forwardRef(({ messages, loading }, ref) => {
  return (
    <div className="chats-container" ref={ref}>
      <div className="chats">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} msg={msg} />
        ))}

        {loading && (
          <div className="chat bot-message loading">
            <div className="avatar">
              <img src="/neyroAilogo.webp" alt="AI" />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})

NeyroChat.displayName = 'NeyroChat'

export default NeyroChat
