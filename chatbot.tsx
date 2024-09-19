'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Copy, Check } from 'lucide-react'

export default function UniqueChatbot() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", isUser: false },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [copiedId, setCopiedId] = useState(null)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputMessage.trim() === '') return

    const newUserMessage = { id: Date.now(), text: inputMessage, isUser: true }
    setMessages(prev => [...prev, newUserMessage])
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { id: Date.now() + 1, text: getAIResponse(inputMessage), isUser: false }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const getAIResponse = (userMessage) => {
    // This is a simple simulation. In a real app, you'd call an AI service here.
    const responses = [
      "That's an intriguing perspective. Can you elaborate on that?",
      "I see where you're coming from. Have you considered the implications of that?",
      "Interesting point. Let's explore that idea further.",
      "That's a complex issue. There are several factors to consider here.",
      "I appreciate your insight. How do you think this relates to the bigger picture?",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`relative max-w-md rounded-2xl p-4 shadow-lg ${
              message.isUser ? 'bg-purple-500 text-white' : 'bg-white text-gray-800'
            }`}>
              {message.text}
              {!message.isUser && (
                <button
                  onClick={() => copyToClipboard(message.text, message.id)}
                  className="absolute bottom-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  {copiedId === message.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg">
        <div className="flex space-x-4">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 border-2 border-purple-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full p-3 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  )
}
