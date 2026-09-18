export default function Filters({minBeds,setMinBeds,maxPrice,setMaxPrice}){
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
        min="500"
        max="3000"
        step="100"
        value={maxPrice}
        onChange={(e)=> setMaxPrice(Number(e.target.value))}
        />
        <span className="font-body text-sm text-ink/60 flex-col sm:flex-row">Up to ₹{maxPrice}</span>
        </div>
    )
}
