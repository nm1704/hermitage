import { formatPrice } from "../utils/price"
export default function Filters({minBeds,setMinBeds,maxPrice,setMaxPrice,maxLimit}){
    
    return(
        <div className="flex gap-4 mb-6">
            <select
                value={minBeds}
                onChange={(e)=>setMinBeds(Number(e.target.value))}
                className="font-body text-sm border border-line rounded-full px-3 py-2"
            >
                <option value={0}>Any Beds</option>
                <option value={1}>1+ Beds</option>
                <option value={2}>2+ Beds</option>
                <option value={3}>3+ Beds</option>
            </select>
        <input 
        type="range"
        min="0"
        max={maxLimit}
        step= "500000"//{Math.max(1,Math.round(maxLimit/50))}
        value={maxPrice ?? maxLimit ?? 0}
        onChange={(e)=> setMaxPrice(Number(e.target.value))}
        />
        <span className="font-body text-sm text-ink/60 flex-col sm:flex-row">Up to{formatPrice(Number(maxPrice))}</span>
        </div>
    )
}
