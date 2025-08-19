import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export default function MainContainer() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Привет! Я Gemini 🤖. Задай мне вопрос.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

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
        { role: 'bot', text: 'Ошибка при запросе 😢' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <div className="main glassContainer">
      <div className="chats">
        {messages.map((msg, idx) => (
          <div key={idx} className="chat">
            {msg.role === 'user' ? (
              <FaUser fontSize={30} />
            ) : (
              <img src="/neyroAilogo.webp" width={30} />
            )}
            <p className="txt">{msg.text}</p>
          </div>
        ))}
        {loading && (
          <div className="chat">
            <img src="/neyroAilogo.webp" width={30} />
            <p className="txt">Печатаю...</p>
          </div>
        )}
      </div>

      <div className="chatFooter">
        <div className="inp">
          <input
            type="text"
            placeholder="Введите запрос..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="send" onClick={sendMessage} disabled={loading}>
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  )
}
