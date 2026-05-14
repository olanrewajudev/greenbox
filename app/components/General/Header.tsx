import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { SlMenu } from 'react-icons/sl'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div>
      <div className="border-b lg:block hidden border-gray-200">
        {/* small header */}
        <div className="flex items-center justify-between w-11/12 mx-auto py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold"> <IoMdTime />  <div className="">Mon - Fri 10:00-18:00</div></div>
          <div className="flex gap-2 items-center">
            <div className="border-r text-sm text-gray-500 font-semiboldF flex items-center gap-2 px-2 border-gray-200"> <MdOutlineEmail /> info@greenboxgroupsg.com</div>
            <div className="flex items-center gap-2"><FaFacebookF /> <FaLinkedinIn /></div>
          </div>
        </div>
      </div>
      {/* big header */}
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <Link to=''><img src="/public/logo.webp" alt="" className="size-32 object-contain -mt-5" /></Link>
        <div className="lg:hidden"><SlMenu /></div>
        <div className="lg:flex hidden items-center font-bold text-sm gap-4">
          <div className=""><Link to='/'>HOME</Link></div>
          <div className=""><Link to='/about-us'>ABOUT US</Link></div>
          <div className=""><Link to='/offers'>OFFERS</Link></div>
          <Link to=''>PRODUCTS</Link>
          <Link to=''>DOWNLOADS</Link>
          <div className=""><Link to='/contact-us'>CONTACT US</Link></div>
          <div className="bg-blue-900 text-white py-4 px-5"> <Link to='/contact-us'>GET A QUOTE</Link></div>
        </div>

      </div>
    </div>
  )
}
