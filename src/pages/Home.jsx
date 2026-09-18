import { useState,useEffect } from "react";
import axios from "axios"
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Filters from "../components/Filters";
import PropertyList from "../components/PropertyList";
//import { properties } from "../data/properties";
import { setSearchTerm,setMinBeds,setMaxPrice } from "../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import PropertyCardSkeleton from "../components/PropertyCardSkeleton";
export default function Home() {
    const [properties, setProperties]= useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError]= useState(null)
    const dispatch=useDispatch()
    const {searchTerm,minBeds,maxPrice}= useSelector((state)=>state.filters)

  // const [searchTerm, setSearchTerm] = useState('')
   // const [minBeds,setMinBeds] = useState(0)
    //const [maxPrice,setMaxPrice] = useState(5000)

    useEffect(()=>{
        axios.get(`http://localhost:3001/properties`)
        .then((response)=>{
            setProperties(response.data)
        })
        .catch((err)=>{
            setError("Could not load listings. Try again later.")
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
        const filteredProperties = properties.filter((property)=>{
        const matchesSearch = 
        property.location.toLowerCase().includes(searchTerm.toLowerCase())||
        property.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesBeds = property.beds>=minBeds
        const matchesPrice= property.price <= maxPrice
        return matchesSearch && matchesBeds && matchesPrice
    })
    return (
     <>
        {/* <Hero className="min-h-screen"/> */}
        
        <Hero searchTerm={searchTerm}
         setSearchTerm={(value)=>dispatch(setSearchTerm(value))} />

        <section className="max-w-6xl mx-auto px-6 mt-20">
        <SectionHeading 
        title="Available now" 
        subtitle={loading ? 'Loading':`${filteredProperties.length} listings`} 
    />
        <Filters
            minBeds={minBeds}
            setMinBeds={(value)=>dispatch(setMinBeds(value))}
            maxPrice={maxPrice}
            setMaxPrice={(value)=>dispatch(setMaxPrice(value))}
        />
        {loading && (<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => <PropertyCardSkeleton key={i} />)}
                    </div>
        )}
         {/* <p className="font-body text-sm text-ink/50 py-12 text-center">Loading properties…</p> */}
        {error && <p className="font-body text-sm text-red-500 py-12 text-center">{error}</p>}
        {!loading && !error && <PropertyList properties={filteredProperties} />}
     
     </section>
    </>
)
}
