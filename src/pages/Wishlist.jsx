import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import PropertyList from "../components/PropertyList"
import SectionHeading from "../components/SectionHeading"

export default function Wishlist() {
  const favoriteIds = useSelector((state) => state.favorites)
  const [allProperties, setAllProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3001/properties')
      .then((res) => setAllProperties(res.data))
      .finally(() => setLoading(false))
  }, [])

  const favoritedProperties = allProperties.filter((p) => favoriteIds.includes(p.id))

  return (
    <section className="max-w-6xl mx-auto px-6 mt-20 mb-20">
      <SectionHeading
        title="Your wishlist"
        subtitle={`${favoritedProperties.length} saved`}
      />
      {loading && <p className="font-body text-sm text-ink/50 py-12 text-center">Loading…</p>}
      {!loading && favoritedProperties.length === 0 && (
        <p className="font-body text-sm text-ink/50 py-12 text-center">
          Nothing saved yet — tap the heart on any listing to add it here.
        </p>
      )}
      {!loading && favoritedProperties.length > 0 && (
        <PropertyList properties={favoritedProperties} />
      )}
    </section>
  )
}