export default function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-line overflow-hidden animate-pulse">
      <div className="w-full h-52 bg-line" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-line rounded w-3/4" />
        <div className="h-3 bg-line rounded w-1/2" />
        <div className="h-3 bg-line rounded w-full mt-4" />
      </div>
    </div>
  )
}