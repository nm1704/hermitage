import { useState } from "react"
import { properties } from "../data/properties"

function getBotReply(userText) {
  const text = userText.toLowerCase()

  if (text.includes('hello') || text.includes('hi')) {
    return "Hi! Ask me about beds, price, or a city — e.g. '2 bedroom in Mumbai under 2000'."
  }

  const bedsMatch = text.match(/(\d+)\s*bed/)
  const priceMatch = text.match(/under\s*\$?(\d+)/)
  const cityWords = ['mumbai', 'pune', 'bengaluru', 'chennai', 'hyderabad']
  const cityMatch = cityWords.find((c) => text.includes(c))

  let results = properties

  if (bedsMatch) {
    const beds = Number(bedsMatch[1])
    results = results.filter((p) => p.beds >= beds)
  }
  if (priceMatch) {
    const price = Number(priceMatch[1])
    results = results.filter((p) => p.price <= price)
  }
  if (cityMatch) {
    results = results.filter((p) => p.location.toLowerCase().includes(cityMatch))
  }

  if (!bedsMatch && !priceMatch && !cityMatch) {
    return "I didn't catch specifics — try something like '3 bed in Pune under 1800'."
  }

  if (results.length === 0) {
    return "No listings match that exactly — try widening your search."
  }

  const names = results.slice(0, 3).map((p) => `${p.title} ($${p.price}/mo)`).join(', ')
  return `Found ${results.length} match${results.length > 1 ? 'es' : ''}: ${names}`
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I can help you find a property. Try asking me something." },
  ])
  const [input, setInput] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { from: 'user', text: input }
    const botMessage = { from: 'bot', text: getBotReply(input) }

    setMessages((prev) => [...prev, userMessage, botMessage])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-2xl border border-line shadow-xl flex flex-col mb-3 overflow-hidden">
          <div className="bg-ink text-sand px-4 py-3 font-body text-sm flex justify-between items-center">
            <span>Hermitage Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-sand/70 hover:text-sand">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm font-body px-3 py-2 rounded-xl max-w-[85%] ${
                  msg.from === 'bot'
                    ? 'bg-sand text-ink self-start'
                    : 'bg-brass text-ink self-end ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="border-t border-line p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about listings..."
              className="flex-1 text-sm font-body outline-none bg-transparent"
            />
            <button type="submit" className="text-brass font-body text-sm">Send</button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-ink text-sand text-2xl shadow-lg flex items-center justify-center hover:bg-ink/90 transition-colors"
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  )
}