export function parsePrice(value) {
  if (typeof value === 'number') return value
  const match = String(value).replace(/[₹,\s]/g, '').match(/^([\d.]+)(Cr|L|K)?$/i)
  if (!match) return 0
  const unit = (match[2] || '').toLowerCase()
  const multiplier = unit === 'cr' ? 1e7 : unit === 'l' ? 1e5 : unit === 'k' ? 1e3 : 1
  return parseFloat(match[1]) * multiplier
}

export function formatPrice(n) {
  if (n >= 1e7) return `₹${+(n / 1e7).toFixed(2)}Cr`
  if (n >= 1e5) return `₹${+(n / 1e5).toFixed(2)}L`
  return `₹${n.toLocaleString('en-IN')}`
}