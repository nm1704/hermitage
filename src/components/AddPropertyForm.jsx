import { useState } from "react";
import axios from "axios";
export default function AddPropertyForm(){
    const [formData, setFormData]= useState({
        title:'',
        location: '',
        price:'',
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData((prev)=>({...prev,[name]:value}))
        }

        const handleSubmit= (e)=> {
            e.preventDefault()
            axios.post('http://localhost:3001/properties',formData)
            .then ((response)=>{
                console.log("Created:",response.data)
                setFormData({title:'',location:'',price:''})
            })
            .catch((err)=>console.error('Failed to add property:',err))
            //console.log('Submitted:',formData)
            // const {name,value} = e.target
            // setFormData((prev)=>({...prev,[name]:value}))
        }
        return(
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
            <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Property title"
            className="border border-line rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-brass"
            />
            <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="price"
            className="border border-line rounded-lg px-3 py-2 font-body text-sm outline-none focus:border-brass" 
            />
            <button type="submit" className="bg-ink text-sand rounded-full px-4 py-2 text-sm">
             Add Property   
            </button>
            </form>
        )
        }

