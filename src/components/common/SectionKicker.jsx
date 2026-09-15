
import React from 'react'

const SectionKicker = ({ children }) => {
  return (
    <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#52a9ff]">
      <span aria-hidden="true" className="h-px w-8 bg-[#52a9ff]" />
      {children}
    </p>
  )
}

export default SectionKicker
