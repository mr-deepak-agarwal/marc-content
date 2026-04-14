'use client'

import React from 'react'

const clients = [
 { name: 'Maduas', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/06/maduas.png' },
 { name: 'E P Kamat', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Kamat.png' },
 { name: 'The Park Hotels', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/07/The-park-hotels.png' },
 { name: 'Kineco', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/logo5.png' },
 { name: 'Magsons', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6.png' },
 { name: 'Taj', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/08/Taj-1.png' },
 { name: 'Isha Yoga', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-223.png' },
 { name: 'Danlow', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-32.png' },
 { name: 'Marriott', logo: 'http://marcglocal.com/wp-content/uploads/2022/07/JW-Marriott.png' },
]

const ClientsSection = () => {
 return (
 <section id="clients" data-testid="clients-section" className="pt-6 pb-14 bg-white overflow-hidden">
 <div className="max-w-7xl mx-auto px-6">

 {/* HEADER same pattern as all other sections */}
 <div className="mb-10">
 <h2
 data-testid="clients-heading"
 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-3 leading-[1.1] tracking-tight"
 >
 Trusted Partners in Business Consulting
 </h2>
 <p className="text-lg text-[#47635D]">
 Organizations that rely on MARC for strategic clarity and execution.
 </p>
 </div>

 {/* MARQUEE */}
 <div className="relative">
 <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, white, transparent)' }} />
 <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, white, transparent)' }} />

 <div className="overflow-hidden">
 <div className="flex gap-4 animate-marquee-clients">
 {[...clients, ...clients, ...clients].map((client, index) => (
 <div
 key={index}
 data-testid={`client-tile-${index}`}
 className="flex-shrink-0 w-[200px] bg-white border border-[#C2DDB4]/40 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer hover:border-[#4E9141] hover:shadow-lg hover:shadow-[#4E9141]/15 hover:-translate-y-1"
 >
 <div className="w-full h-[80px] flex items-center justify-center">
 <img
 src={client.logo}
 alt={`${client.name} logo`}
 className="max-w-[140px] max-h-[70px] w-auto h-auto object-contain grayscale opacity-65 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
 />
 </div>
 <div className="text-xs font-semibold text-[#47635D] text-center tracking-wide uppercase">
 {client.name}
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>

 <style jsx>{`
 @keyframes marquee-clients {
 0% { transform: translateX(0); }
 100% { transform: translateX(-33.33%); }
 }
 .animate-marquee-clients {
 animation: marquee-clients 20s linear infinite;
 }
 .animate-marquee-clients:hover {
 animation-play-state: paused;
 }
 `}</style>
 </section>
 )
}

export default ClientsSection
