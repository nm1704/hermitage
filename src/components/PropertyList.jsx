import PropertyCard from "./PropertyCard";
export default function PropertyList({properties}){
    if (properties.length==0){
        return(
            <p className="font-body text-sm text-ink/50 py-12 text-center">
                No Properties match your search-try widening your filter 
            </p>
        )
    }
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property)=>(
              <PropertyCard key={property.id} property={property}/>
            ))}
        </div>
    )
}