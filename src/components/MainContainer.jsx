import { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import InputMessage from './InputMessage'
import NeyroChat from './NeyroChat'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export default function MainContainer({ sidebarCollapsed }) {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Привет! Я NeyroAi 🤖. Задай мне любой вопрос, и я постараюсь помочь!',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const chatContainerRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMsg = { role: 'user', text: input }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    try {
      setLoading(true)
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
      const result = await model.generateContent(input)
      const botReply = result.response.text()

      setMessages((prev) => [...prev, { role: 'bot', text: botReply }])
    } catch (err) {
      console.error(err)
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Извините, произошла ошибка при обработке запроса. Пожалуйста, попробуйте еще раз.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => {
    setMessages([
      {
        role: 'bot',
        text: 'Чат очищен. Чем могу помочь?',
      },
    ])
  }

  return (
    <div className={`main-container ${sidebarCollapsed ? 'expanded' : ''}`}>
      <div className="chat-header">
        <h2>NeyroAi Assistant</h2>
        <button className="clear-chat-btn" onClick={clearChat}>
          Очистить чат
        </button>
      </div>

      <NeyroChat messages={messages} loading={loading} ref={chatContainerRef} />

      <InputMessage
        input={input}
        setInput={setInput}
        handleKeyDown={handleKeyDown}
        sendMessage={sendMessage}
        loading={loading}
      />
    </div>
  )
}
