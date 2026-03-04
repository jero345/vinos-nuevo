export default function SectionDivider({ light = false }) {
  return (
    <div className={`w-full flex items-center justify-center py-2 ${light ? 'bg-estate-cream' : 'bg-estate-warmwhite'}`}>
      <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className="opacity-25">
        <line x1="0" y1="10" x2="50" y2="10" stroke={light ? '#6B4C35' : '#C4B5A0'} strokeWidth="0.5" />
        <circle cx="60" cy="10" r="3" stroke={light ? '#6B4C35' : '#C4B5A0'} strokeWidth="0.5" />
        <circle cx="60" cy="10" r="1" fill={light ? '#B8963E' : '#B8963E'} />
        <line x1="70" y1="10" x2="120" y2="10" stroke={light ? '#6B4C35' : '#C4B5A0'} strokeWidth="0.5" />
      </svg>
    </div>
  )
}
