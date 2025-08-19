import { IoIosSend } from 'react-icons/io'
import { FiPaperclip } from 'react-icons/fi'

export default function UserMessage({
  input,
  setInput,
  handleKeyDown,
  sendMessage,
  loading,
}) {
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <button className="attach-btn">
          <FiPaperclip />
        </button>

        <div className="input-field">
          <textarea
            placeholder="Введите ваш запрос..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            disabled={loading}
          />
        </div>

        <button
          className="send-btn"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          <IoIosSend />
        </button>
      </div>

      <div className="input-footer">
        <span className="hint">
          Нажмите Enter для отправки, Shift+Enter для новой строки
        </span>
      </div>
    </div>
  )
}
