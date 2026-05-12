import { faqData, product, slider } from "~/components/constant";
import type { Route } from "./+types/home";
import type React from "react";
import { PiPlantFill } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import { FaRecycle } from "react-icons/fa";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPlus, FiX } from "react-icons/fi";
import { useState } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "GreenBox Group SG" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* home banner */}
      <div className="relative h-screen w-full overflow-hidden">
        <img src="/photo.jpg" alt="Industrial Metals" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center">
          <div className="w-[90%] max-w-7xl mx-auto">
            <div className="max-w-3xl lg:ml-auto">
              <div className="uppercase tracking-[6px] text-sm text-white font-bold mb-6">Strategic Resources</div>
              <h1 className="text-white font-extrabold leading-[0.95] text-5xl md:text-7xl">Metals & Industrial<br />Alloys</h1>
              <p className="text-white/90 text-lg md:text-2xl leading-10 mt-8 max-w-2xl"> High-purity Aluminium Ingots, Copper, and Zinc. Sourcing the essential elements for global manufacturing and infrastructure.</p>
              <div className="flex flex-wrap items-center gap-5 mt-12">
                <Link to="/products" className="bg-white text-blue-900 px-10 py-5 font-extrabold uppercase tracking-wider text-sm hover:bg-gray-100 transition-all">View Metals</Link>
                <Link to="/contact-us" className="border border-white text-white px-10 py-5 font-extrabold uppercase tracking-wider text-sm hover:bg-white hover:text-blue-900 transition-all">Get Quotation</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 flex items-center gap-3 z-20">
          <div className="w-14 h-[3px] bg-white" />
          <div className="w-10 h-[3px] bg-white/40" />
          <div className="w-10 h-[3px] bg-white/40" />
          <div className="w-10 h-[3px] bg-white/40" />
        </div>
        <div className="absolute bottom-10 right-10 flex items-center z-20">
          <button className="w-16 h-16 border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all">‹</button>
          <button className="w-16 h-16 border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all">›</button>
        </div>
      </div>

      {/* carousel */}
      <div className="my-20">
        <div className="text-center">
          <h5 className="font-bold text-sm text-gray-500 uppercase">Accreditations & Standards</h5>
          <h1 className="text-blue-900 text-[2rem] font-extrabold">Global Quality Compliance</h1>
        </div>
        <div className="flex gap-10 my-10">
          {slider.map((item, i: React.Key) => (
            <div className="flex items-center justify-center flex-col gap-2" key={i}>
              <item.icon className="text-[2rem] text-blue-900" />
              <div className="">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* grids */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-5">
        <div className="bg-blue-900 h-[20rem] text-white flex items-start p-4 justify-center flex-col">
          <div className="mb-3 text-2xl font-extrabold">AGRO PRODUCTS</div>
          <div className="">Premium sourcing of Grains, Sugar (ICUMSA 45), and Edible Oils. We bridge the gap between global harvests and your supply chain.</div>
        </div>
        <div className=""><img src="/public/photo.jpg" alt="" className="h-[20rem] w-full object-cover" /></div>
        <div className="bg-gray-500 h-[20rem] text-white flex items-center p-4 justify-center flex-col">
          <div className=""><PiPlantFill size='4rem' /></div>
          <div className="text-sm font-bold uppercase">Verified Sourcing</div>
        </div>
        <div className=""><img src="/public/photo.jpg" alt="" className="h-[20rem] w-full object-cover" /></div>
        <div className="bg-white h-[20rem] text-blue-900 flex items-center p-4 justify-center flex-col">
          <div className=""><IoDocumentText size='4rem' /></div>
          <div className="text-sm font-bold uppercase">Industrial Compliance</div>
        </div>
        <div className="bg-blue-900 h-[20rem] text-white flex items-start p-4 justify-center flex-col">
          <div className="mb-3 text-2xl font-extrabold">Oil & Petroleum</div>
          <div className="">Strategic distribution of refined petroleum chemicals and industrial oils with Tier-1 logistics and port-to-port security.</div>
        </div>
        <div className="bg-white h-[20rem] text-blue-900 flex items-start p-4 justify-center flex-col">
          <div className="mb-3 text-2xl font-extrabold">Oil & Petroleum</div>
          <div className="">Strategic distribution of refined petroleum chemicals and industrial oils with Tier-1 logistics and port-to-port security.</div>
        </div>
        <div className="bg-blue-900 h-[20rem] text-white flex items-center p-4 justify-center flex-col">
          <div className=""><FaRecycle size='4rem' /></div>
          <div className="text-sm font-bold uppercase">Sustainability</div>
        </div>
        <div className=""><img src="/public/photo.jpg" alt="" className="h-[20rem] w-full object-cover" /></div>
        <div className="bg-blue-900 h-[20rem] text-white flex items-start p-4 justify-center flex-col">
          <div className="mb-3 text-2xl font-extrabold">Aluminium Ingot</div>
          <div className="">Supplying high-purity aluminium ingots for the automotive and aerospace industries via optimized global freight lanes.</div>
        </div>
        <div className=""><img src="/public/photo.jpg" alt="" className="h-[20rem] w-full object-cover" /></div>
        <div className="bg-gray-500 h-[20rem] text-white flex items-center p-4 justify-center flex-col">
          <div className=""><PiPlantFill size='4rem' /></div>
          <div className="text-sm font-bold uppercase">GLOBAL REACH</div>
        </div>
      </div>

      {/* product */}
      <div className="mt-10">
        <div className="text-center">
          <h5 className="font-bold text-gray-500 text-sm uppercase">Global Solutions</h5>
          <h1 className="text-blue-900 text-[2rem] font-extrabold">Product Portfolio</h1>
        </div>
        <div className="items-center justify-center flex mt-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {product.map((item, i: React.Key) => (
              <div className="" key={i}>
                <img src={item.image} alt="" className="w-full h-[13rem]" />
                <div className="border border-gray-200 p-5 h-[10rem] w-[20rem]">
                  <div className="">
                    <div className="text-base uppercase mb-3 text-gray-500 font-extrabold">{item.title}</div>
                    <div className="flex flex-wrap gap-3">{item.category.map((cart, i: React.Key) => (
                      <div className="bg-gray-200 px-2 text-gray-600 rounded-sm" key={i}><div className="text-sm">{cart.name}</div></div>))}
                    </div>
                  </div>
                  <div className="text-xs font-bold mt-7 flex items-center gap-3 text-blue-900"><Link to={item.link}>{item.linkName}</Link><FaArrowRightLong /> </div>
                </div>
              </div>
            ))}
            <div className="mb-10">
              <div className="bg-white h-[23rem] border border-gray-200 text-blue-900 flex items-center p-4 justify-center flex-col">
                <div className=""><IoDocumentText size='2rem' /></div>
                <div className="text-xl text-gray-600 font-bold uppercase my-3">Full Trading Portfolio</div>
                <div className="text-sm text-gray-600 text-center">Access our complete list of industrial <br /> commodities and specifications</div>
                <Link to='/contact-us' className="bg-blue-900 mt-3 text-white py-3 px-4 font-bold text-xs" >CONTACT US NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* logistics */}
      <div className=" py-20 mt-16">
        <div className="w-[80%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="/public/photo.jpg" alt="" className="h-[260px] w-full object-cover" />
              <img src="/public/photo.jpg" alt="" className="h-[260px] w-full object-cover" />
              <img src="/public/photo.jpg" alt="" className="h-[260px] w-full object-cover" />
              <img src="/public/photo.jpg" alt="" className="h-[260px] w-full object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white w-[180px] h-[140px] flex flex-col items-center justify-center shadow-xl">
              <h1 className="text-5xl font-extrabold">15+</h1>
              <p className="text-xs uppercase tracking-widest text-center font-bold mt-2 leading-5">Years Of Trade <br /> Excellence</p>
            </div>
          </div>
          <div>
            <div className="inline-block bg-blue-900 text-white text-[10px] tracking-[4px] font-bold uppercase px-3 py-1 mb-5">Global Logistics & Portfolio</div>
            <h1 className="text-blue-900 text-5xl leading-tight font-extrabold max-w-xl"> Strategic Sourcing <br /> for Industrial <br /> Growth.</h1>
            <p className="text-gray-600 text-lg leading-9 mt-6 max-w-xl"> From Agro-commodities and refined Oils to recycled Metal Scrap and high-purity Aluminium Ingots, our network ensures your supply chain is resilient and compliant.</p>
            <div className="flex items-center gap-10 mt-10 flex-wrap">
              <div className="pr-10 border-r border-gray-300"><h1 className="text-5xl font-extrabold text-blue-900">45+</h1><p className="text-sm font-bold uppercase text-gray-500 mt-2">Trading Hubs</p></div>
              <div><h1 className="text-5xl font-extrabold text-blue-900">100+</h1><p className="text-sm font-bold uppercase text-gray-500 mt-2">Product Compliance %</p></div>
            </div>
            <Link to="/about-us" className="inline-flex items-center gap-3 bg-blue-900 text-white px-10 py-5 mt-12 font-bold tracking-wider text-sm uppercase hover:bg-blue-800 transition-all">Learn More<FaArrowRightLong /></Link>
          </div>
        </div>
      </div>

      {/* strategy */}
      <div className="bg-blue-900 py-24">
        <div className="w-[85%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[11px] tracking-[5px] uppercase text-gray-200 font-bold mb-6">Strategic Partnership</div>
            <h1 className="text-white text-5xl lg:text-6xl leading-[1.1] font-extrabold max-w-xl">Ready to Scale Your <br /><span className="text-gray-300">Global Supply</span> <br />Chain?</h1>
            <p className="text-gray-200 text-lg leading-10 mt-8 max-w-2xl"> From bulk agro-commodities to specialized metals and industrial oils, Greenbox Group provides the infrastructure and verified sourcing to help you lead your market.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mt-14">
              <div className="flex items-center gap-3 text-white font-bold"><span className="text-gray-300 text-lg">✓</span>ISO 9001 Quality Certified</div>
              <div className="flex items-center gap-3 text-white font-bold"><span className="text-gray-300 text-lg">✓</span>Global Tier-1 Logistics</div>
              <div className="flex items-center gap-3 text-white font-bold"><span className="text-gray-300 text-lg">✓</span>Verified Industrial Sourcing</div>
              <div className="flex items-center gap-3 text-white font-bold"><span className="text-gray-300 text-lg">✓</span>Bulk Trading Capacity</div>
            </div>
            <Link to="/contact-us" className="inline-flex items-center justify-center bg-gray-100 text-blue-900 font-extrabold tracking-[2px] uppercase text-sm px-12 py-6 mt-16 hover:bg-white transition-all">Request Bulk Quotation</Link>
          </div>
          <div>
            <h3 className="text-white text-2xl font-extrabold uppercase tracking-wide mb-10">Quick Inquiry By Product</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-l-4 border-gray-200 pl-8 py-5">
                <div>
                  <h4 className="text-white text-2xl font-bold">Agro Products</h4>
                  <p className="text-gray-300 mt-2">Sugar ICUMSA 45, Grains, Edible Oils</p>
                </div>
                <FaArrowRightLong className="text-white text-2xl" />
              </div>
              <div className="bg-gray-100 p-8 flex items-center justify-between hover:translate-x-1 transition-all cursor-pointer">
                <div>
                  <h4 className="text-blue-950 text-2xl font-bold">Industrial Oil</h4>
                  <p className="text-gray-600 mt-2">Refined Petroleum & Chemicals</p>
                </div>
                <FaArrowRightLong className="text-blue-900 text-2xl" />
              </div>
              <div className="bg-gray-100 p-8 flex items-center justify-between hover:translate-x-1 transition-all cursor-pointer">
                <div>
                  <h4 className="text-blue-950 text-2xl font-bold">Metal Scrap</h4>
                  <p className="text-gray-600 mt-2">Ferrous & Non-Ferrous Sourcing</p>
                </div>
                <FaArrowRightLong className="text-blue-900 text-2xl" />
              </div>
              <div className="bg-gray-100 p-8 flex items-center justify-between hover:translate-x-1 transition-all cursor-pointer">
                <div><h4 className="text-blue-950 text-2xl font-bold">Aluminium Ingot</h4><p className="text-gray-600 mt-2">High-Purity Industrial Ingots</p></div>
                <FaArrowRightLong className="text-blue-900 text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* operations */}
      <div className="bg-[#f5f5f5] py-28">
        <div className="w-[85%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-[11px] tracking-[6px] uppercase text-blue-900 font-bold mb-6">Operational Excellence</div>
            <h1 className="text-blue-900 text-5xl lg:text-6xl font-extrabold leading-[1.1] max-w-xl">Reliable Trade <br />Infrastructure</h1>
            <p className="text-gray-600 text-xl leading-10 mt-8 max-w-2xl"> From South American ports to global industrial hubs, Greenbox Group manages the entire value chain. Our operations ensure that your commodities and other products are handled with the highest standards of quality and efficiency.</p>
            <div className="mt-12 space-y-6">
              {["Automated Logistics Tracking", "Global Compliance Verification", "End-to-End Supply Chain Management",].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-blue-900 text-xl font-bold">✓</span>
                  <span className="text-gray-700 text-lg font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about-us" className="inline-flex items-center justify-center bg-blue-900 text-white px-12 py-6 mt-14 font-extrabold tracking-[2px] uppercase text-sm hover:bg-blue-800 transition-all">Learn More About Us</Link>
          </div>
          <div className="relative"><div className="overflow-hidden rounded-lg shadow-2xl"><iframe className="w-full h-[420px]" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Greenbox Operations" allowFullScreen /></div></div>
        </div>
      </div>

      {/* support */}
      <div className="py-20">
        <div className="w-[85%] max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[11px] tracking-[6px] uppercase text-blue-900 font-bold mb-5">Support & Logistics</div>
            <h1 className="text-blue-900 text-5xl lg:text-6xl font-extrabold">Common Questions.</h1>
            <p className="text-gray-500 text-xl leading-10 mt-8 max-w-3xl mx-auto"> Everything you need to know about our global trade operations and compliance standards.    </p>
          </div>
          <div className="space-y-5">
            {faqData.map((item, index) => {
              const isActive = active === index;
              return (
                <div key={index} className="bg-white border border-gray-200 overflow-hidden">
                  <button onClick={() => setActive(isActive ? -1 : index)} className={`w-full flex items-center justify-between px-8 py-8 text-left transition-all ${isActive ? "bg-blue-800 text-white" : "bg-white text-blue-900"}`}>
                    <h2 className="text-xl font-extrabold max-w-4xl leading-8">{item.question}</h2>
                    <div className="text-3xl">{isActive ? <FiX /> : <FiPlus />}</div>
                  </button>
                  {isActive && (<div className="px-8 py-8 bg-white"><p className="text-gray-500 text-xl leading-10 max-w-4xl">{item.answer}</p></div>)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
