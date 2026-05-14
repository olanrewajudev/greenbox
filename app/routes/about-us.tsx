import React from 'react'
import { FaArrowRight, } from 'react-icons/fa'
import { features, stats } from '~/components/constant'
const workflow = [
  {
    number: '01',
    title: 'Sourcing & Verification',
    desc: 'Rigorous vetting of origins for Metals, Agri, and Energy resources to ensure Grade-A quality and ethical standards.',
  },
  {
    number: '02',
    title: 'Strategic Financing',
    desc: "Utilizing Singapore's financial infrastructure to provide secure Letter of Credit (LC) and tailored trade finance options.",
  },
  {
    number: '03',
    title: 'Global Distribution',
    desc: 'End-to-end maritime and land logistics with real-time tracking until the point of discharge at your destination port.',
  },
]
export default function AboutUs() {
  return (
    <div className="bg-[#f7f7f7]">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-[0.4em] text-blue-900 uppercase">Our Identity</p>
            <h1 className="text-3xl font-black uppercase leading-tight text-blue-900 md:text-4xl">Global Trade, Singapore Precision.</h1>
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-10 text-gray-600"> Greenbox Group SG is a premier global trading house headquartered in Singapore, specializing in the end-to-end sourcing and distribution of critical industrial and agricultural commodities.</p>
          </div>

          <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="overflow-hidden rounded-md bg-white p-4 shadow-sm">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop" alt="warehouse" className="h-[19rem] w-full rounded-md object-cover" />
              </div>
              <p className="mt-4 text-center text-xs font-semibold tracking-[0.35em] text-gray-400 uppercase">Strategic Hub: Singapore Office</p>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-extrabold tracking-wide text-blue-900 uppercase">The Mission</h3>
                <div className="mt-2 h-[3px] w-10 bg-blue-900" />
                <p className="mt-3 text-sm leading- text-gray-700"> To provide seamless, transparent supply chain solutions that empower industrial growth across five continents, ensuring every shipment meets absolute international compliance.</p>
              </div>

              <div>
                <h3 className="text-xl font-extrabold tracking-wide text-blue-900 uppercase">Vertical Expertise</h3>
                <div className="mt-2 h-[3px] w-10 bg-blue-900" />
                <p className="mt-3 text-sm leading- text-gray-700"> Unlike general trading houses, we maintain deep vertical expertise in 5 distinct sectors:{' '} <span className="font-bold">   Metals, Agricultural, Industrial, Energy, and Livestock. </span>{' '} Our team manages the nuances of every commodity, from Iron Ore smelting requirements to strict Livestock cold-chain integrity.</p>
              </div>

              <div>
                <h3 className="text-xl font-extrabold tracking-wide text-blue-900 uppercase">Why Greenbox?</h3>
                <div className="mt-2 h-[3px] w-10 bg-blue-900" />
                <p className="mt-3 text-sm leading- text-gray-700"> Leveraging Singapore&apos;s position as a global financial and maritime hub, we provide our clients with Tier-1 logistics access and secure trade financing options that mitigate risk in volatile markets.</p>
              </div>
              <button className="flex items-center gap-3 rounded-md bg-blue-900 px-10 py-5 text-sm font-bold tracking-[0.15em] text-white uppercase transition hover:bg-[#102d68]">Discuss Requirements<FaArrowRight /></button>
            </div>
          </div>
        </div>
      </section>


      <section className="p-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div key={index} className="rounded-md border border-gray-200 bg-white px-4 py-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center text-4xl text-blue-900">{item.icon}</div>
              <h3 className="mt-4 text-xl font-extrabold tracking-wide text-blue-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-blue-900 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-5xl font-black text-white">{item.value}</h2>
              <p className="mt-4 text-sm font-semibold tracking-[0.3em] text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="px-6 py-24 ">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.4em] text-blue-900 uppercase">The Workflow</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-blue-900 md:text-5xl">How We Execute.</h2>
          </div>

          <div className="mt-10 space-y-8">
            {workflow.map((step, index) => (
              <div key={index} className="group relative overflow-hidden rounded-md border border-gray-200 bg-white transition duration-300 hover:border-blue-200 hover:shadow-lg">
                <div className="grid md:grid-cols-[160px_1fr]">
                  <div className="relative flex items-center justify-center py-3 border-b border-gray-100"><span className="text-6xl font-black transition text-gray-200">{step.number}</span>
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-900" />
                  </div>
                  <div className="px-8 py-5">
                    <h3 className="text-xl font-extrabold uppercase tracking-wide text-blue-900">{step.title}</h3>
                    <div className="mt-2 h-[3px] w-14 bg-blue-900" />
                    <p className="mt-3 max-w-3xl text-sm leading-8 text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}