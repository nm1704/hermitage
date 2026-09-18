export default function Hero({searchTerm,setSearchTerm}) {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-14">
      <div className="grid md:grid-cols-5 gap-10 items-end">
        <div className="md:col-span-2">
          <span className="font-body text-xs uppercase tracking-[0.2em] text-sage">
            Listings updated daily
          </span>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mt-3 text-ink">
            Find a place that
            <span className="italic text-brass"> feels</span> like home
          </h1>
          <p className="font-body text-ink/60 mt-5 max-w-sm">
            Browse verified listings across the city — from quiet studios to
            family houses, all in one place.
          </p>
        </div>

        <div className="md:col-span-3 relative">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop"
            alt="Modern house exterior"
            className="w-full h-[360px] object-cover rounded-2xl"
          />
          <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg shadow-ink/10 border border-line px-5 py-4 flex flex-col sm:flex-row gap-3 sm:items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              placeholder="Search by city, neighborhood..."
              className="flex-1 bg-transparent font-body text-sm text-ink placeholder:text-ink/40 outline-none"
            />
            <select className="font-body text-sm text-ink/70 bg-sand rounded-full px-3 py-2 outline-none">
              <option>Any type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Studio</option>
            </select>
            <button className="bg-brass text-ink font-body text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brass/90 transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
