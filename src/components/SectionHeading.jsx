export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      {subtitle && (
        <p className="font-body text-sm text-ink/50 mt-1">{subtitle}</p>
      )}
    </div>
  )
}