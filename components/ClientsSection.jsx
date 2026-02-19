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
]

const ClientsSection = () => {
  return (
    <section id="clients" data-testid="clients-section" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[3px] bg-[#B45309]" />
            <span className="text-[#1D342F] font-bold text-lg lg:text-xl uppercase tracking-[0.1em]">
              Our Clients
            </span>
          </div>

          <h2 
            data-testid="clients-heading"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-4 leading-[1.1] tracking-tight"
          >
            Trusted Partners in Business Consulting
          </h2>

          <p className="text-lg text-[#47635D]">
            Organizations that rely on MARC for strategic clarity and execution.
          </p>
        </div>

        {/* ===== MARQUEE ===== */}
        <div className="relative">
          <div className="marquee-container">
            <div className="marquee-track">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  data-testid={`client-tile-${index}`}
                  className="flex-shrink-0 w-[180px] bg-white border border-[#C2DDB4]/30 rounded-xl p-4 flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer hover:border-[#4E9141] hover:shadow-lg hover:shadow-[#4E9141]/15 hover:-translate-y-1"
                >
                  <div className="w-full h-[50px] flex items-center justify-center p-1">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                    />
                  </div>
                  <div className="text-xs font-semibold text-[#212427] text-center">
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection