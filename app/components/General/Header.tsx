
import { HoverCard } from '@mantine/core'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { SlMenu } from 'react-icons/sl'
import { FiChevronDown, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router'

const productItems = [
  {
    title: 'METALS',
    items: ['Copper', 'Steel', 'Iron Ore', 'HMS 1', 'HMS 2', 'Aluminium Ingots', 'Scrap Metals',],
  },
  {
    title: 'AGRICULTURAL',
    items: ['Rice', 'Sugar', 'Corn'],
  },
  {
    title: 'INDUSTRIAL',
    items: ['Aluminum', 'Zinc', 'Nickel', 'Coltan', 'Cement', 'Clinker'],
  },
  {
    title: 'ENERGY',
    items: ['Diesel', 'Crude Oil'],
  },
  {
    title: 'LIVESTOCK',
    items: ['Cattle', 'Goat'],
  },
  {
    title: 'IT',
    items: ['Laptops', 'Servers'],
  },
]

const downloadItems = ['LOI FORM', 'SUPPLIER FORM']

export default function Header() {
  return (
    <div>
      <div className="border-b lg:block hidden border-gray-200">
        <div className="flex items-center justify-between w-11/12 mx-auto py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold"><IoMdTime />       <div>Mon - Fri 10:00-18:00</div></div>
          <div className="flex gap-2 items-center">
            <div className="border-r text-sm text-gray-500 font-semibold flex items-center gap-2 px-2 border-gray-200"><MdOutlineEmail />info@greenboxgroupsg.com</div>
            <div className="flex items-center gap-2"><FaFacebookF /><FaLinkedinIn /></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-11/12 mx-auto">
        <Link to="/"><img src="/logo.webp" alt="logo" className="size-32 object-contain -mt-5" /></Link>
        <div className="lg:hidden"><SlMenu /></div>
        <div className="lg:flex hidden items-center font-bold text-sm gap-10">
          <Link to="/">HOME</Link>
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/offers">OFFERS</Link>
          <HoverCard width={240} shadow="md" openDelay={100} closeDelay={100} position="bottom" offset={0} withinPortal={false}>
            <HoverCard.Target><div className="flex items-center gap-1 cursor-pointer h-[2rem] hover:text-blue-700 transition">PRODUCTS<FiChevronDown size={14} /></div></HoverCard.Target>
            <HoverCard.Dropdown className="p-0 rounded-none border-none absolute" styles={{ dropdown: { overflow: 'visible', }, }}>
              <div className="w-[240px] bg-[#f5f5f5] border-t-[3px] border-blue-900"> {productItems.map((category) => (
                <HoverCard key={category.title} width={220} shadow="md" openDelay={0} closeDelay={100} position="right-start" offset={0} withinPortal={false}>
                  <HoverCard.Target><div className="flex items-center justify-between px-5 py-5 border-b border-gray-300 cursor-pointer text-[15px] font-bold hover:bg-gray-100 transition"><span>{category.title}</span><FiPlus size={18} /></div></HoverCard.Target>
                  <HoverCard.Dropdown className="p-0 rounded-none border-none absolute" styles={{ dropdown: { overflow: 'hidden', }, }}>
                    <div className="w-[220px] bg-[#f5f5f5]">{category.items.map((item) => (<Link key={item} to={`/single-product/${item}`} className="block px-5 py-4 text-[15px] border-b border-gray-200 hover:bg-gray-100 transition  font-medium">{item}</Link>))}</div>
                  </HoverCard.Dropdown>
                </HoverCard>
              ))}
              </div>
            </HoverCard.Dropdown>
          </HoverCard>

          <HoverCard width={240} shadow="md" openDelay={100} closeDelay={100} position="bottom" offset={0} withinPortal={false}>
            <HoverCard.Target><div className="flex items-center gap-1 cursor-pointer h-[2rem] hover:text-blue-700 transition">DOWNLOADS<FiChevronDown size={14} /></div></HoverCard.Target>
            <HoverCard.Dropdown className="p-0 absolute rounded-none border-none">
              <div className="w-[240px] bg-[#f5f5f5] border-t-[3px] border-blue-900">
                {downloadItems.map((item) => (<div key={item} className="flex items-center justify-between px-5 py-4 border-b border-gray-200 text-[15px] cursor-pointer font-bold hover:bg-gray-100 transition"     ><span>{item}</span></div>))}
              </div>
            </HoverCard.Dropdown>
          </HoverCard>
          <Link to="/contact-us">CONTACT US</Link>
          <div className="bg-blue-900 text-white py-4 px-5 hover:bg-blue-800 transition"><Link to="/contact-us">GET A QUOTE</Link></div>
        </div>
      </div>
    </div>
  )
}