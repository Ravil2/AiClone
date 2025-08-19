import { FaUser } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from './CodeBlock'

export default function ChatMessage({ msg }) {
  return (
    <div
      className={`chat ${msg.role === 'user' ? 'user-message' : 'bot-message'}`}
    >
      <div className="avatar">
        {msg.role === 'user' ? (
          <div className="user-avatar">
            <FaUser />
          </div>
        ) : (
          <img src="/neyroAilogo.webp" alt="AI Avatar" />
        )}
      </div>

      <div className="message-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              const codeText = String(children).replace(/\n$/, '')
              return !inline && match ? (
                <CodeBlock language={match[1]} code={codeText} />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {msg.text}
        </ReactMarkdown>
      </div>
    </div>
  )
}
