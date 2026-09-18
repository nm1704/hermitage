import {useState, useEffect} from "react"
import { useParams, Link } from 'react-router-dom'
//import { properties } from '../data/properties'
import axios from "axios"

export default function PropertyDetail() {
  const { id } = useParams()
  const [property,setProperty]=useState(null)
  const [loading,setLoading]=useState(true)

  //const property = properties.find((p) => p.id === Number(id))
  useEffect(()=>{
    axios.get(`http://localhost:3001/properties/${id}`)
    .then((response)=> setProperty(response.data))
    .catch(()=>setProperty(null))
    .finally(()=>setLoading(false))
  },[id])

  if(loading){
    return <p className="max-w-3xl mx-auto px-6 py-20 text-center font-body text-ink/50">Loading…</p>
  }
  
  if (!property) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="font-body text-ink/60">Property not found.</p>
        <Link to="/" className="text-brass underline mt-2 inline-block">
          Back to listings
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/" className="font-body text-sm text-ink/50 hover:text-ink">
        ← Back to listings
      </Link>

      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 sm:h-80 object-cover rounded-2xl mt-4"
      />

      <h1 className="font-display text-3xl text-ink mt-6">{property.title}</h1>
      <p className="font-body text-sage mt-1">{property.location}</p>
      <p className="font-display text-2xl text-brass mt-4">
        ${property.price}<span className="text-sm text-ink/40 font-body">/mo</span>
      </p>

      <div className="flex gap-4 mt-6 pt-6 border-t border-line font-body text-sm text-ink/60">
        <span>{property.beds} beds</span>
        <span>{property.baths} baths</span>
        <span>{property.sqft} sqft</span>
      </div>
    </div>
  )
}