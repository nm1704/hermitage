import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../redux/authSlice"

export default function Login() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ name }))
    navigate('/wishlist')
  }

  return (
    <div className="max-w-sm mx-auto px-6 py-20">
      <h1 className="font-display text-2xl text-ink mb-6">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="border border-line rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-brass"
        />
        <button type="submit" className="bg-ink text-sand rounded-full px-4 py-2 text-sm">
          Continue
        </button>
      </form>
    </div>
  )
}