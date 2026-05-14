
import { FaArrowRight, FaFilePdf } from 'react-icons/fa'
import { offers } from '~/components/constant'
const header = ['Product Image', 'Product', 'Description', 'Qty', 'Origin', 'View Offer', 'Enquiry',]

export default function Offer() {
  return (
    <section className=" px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-extrabold tracking-[0.25em] text-blue-900 uppercase">Verified Global Inventory</p>
          <h2 className="mt-4 text-3xl font-black uppercase text-blue-900 md:text-4xl">Current Trade Offers</h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-gray-600"> High-purity industrial commodities and energy derivatives available for immediate allocation. Updated weekly for verified corporate procurement.</p>
        </div>
        
        {/* Table */}
        <div className="mt-16 overflow-x-auto rounded-md border border-gray-200 bg-white shadow-sm">
          <table className="min-w-full border-collapse">
            <thead className="bg-blue-900 text-left">
              <tr>{header.map((item, index) => (<th key={index} className="border-r border-white/20 px-6 py-6 text-xs font-extrabold tracking-[0.18em] text-white uppercase last:border-r-0">{item}</th>))}</tr>
            </thead>
            <tbody>
              {offers.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 transition hover:bg-gray-50">
                  <td className="border-r border-gray-200 px-5 py-8"><img src={item.image} alt={item.product} className="h-28 w-28 rounded object-cover" /></td>

                  <td className="border-r border-gray-200 px-5 py-8 align-middle">
                    <h3 className="text-xl font-black text-[#2d2d2d]">{item.product}</h3>
                    {item.category && (<p className="mt-3 text-sm font-extrabold tracking-wide text-blue-900 uppercase">{item.category}</p>)}
                  </td>

                  <td className="border-r border-gray-200 px-5 py-8">
                    <p className="max-w-md text-base leading-8 text-gray-700">{item.description}</p>
                    {item.extra && (<p className="mt-5 text-sm leading-7 text-blue-900">{item.extra}</p>)}
                  </td>
                  <td className="border-r border-gray-200 px-5 py-8"><p className="text-2xl font-black text-[#2d2d2d]">{item.qty}</p></td>
                  <td className="border-r border-gray-200 px-5 py-8">
                    <div className="space-y-2">
                      {item.origin.map((country, idx) => (<p key={idx} className="text-sm font-extrabold tracking-[0.15em] text-blue-900 uppercase">{country}</p>))}
                    </div>
                  </td>
                  <td className="border-r border-gray-200 px-5 py-8 text-center">
                    <button className="group inline-flex flex-col items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded bg-red-500 text-white transition group-hover:scale-105"><FaFilePdf className="text-lg" /></div>
                      <span className="text-xs font-bold tracking-wide text-gray-600 uppercase">View Offer</span>
                    </button>
                  </td>
                  <td className="px-5 py-8"><button className="flex items-center gap-3 rounded-md bg-blue-900 px-8 py-4 text-sm font-bold tracking-[0.15em] text-white uppercase transition hover:bg-[#102d68]">Enquire<FaArrowRight /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}