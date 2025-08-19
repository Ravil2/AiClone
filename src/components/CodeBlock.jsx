import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FiCopy, FiCheck } from 'react-icons/fi'

export default function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block-wrapper">
      <div className="code-header">
        <span className="language-tag">{language}</span>
        <button onClick={copyToClipboard} className="copy-btn">
          {copied ? <FiCheck className="success" /> : <FiCopy />}
          {copied ? 'Скопировано!' : 'Копировать'}
        </button>
      </div>
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        PreTag="div"
        className="code-block"
        showLineNumbers
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
