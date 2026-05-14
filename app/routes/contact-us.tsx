// import React from 'react'

// export default function ContactUs() {
//   return (
//     <section className=" px-6 py-10">
//       <div className="mx-auto max-w-7xl">
//         {/* header */}
//         <div className="text-center">
//           <p className="text-xs font-extrabold tracking-[0.25em] text-blue-900 uppercase">Connect With Us</p>
//           <h2 className="mt-4 text-3xl font-black uppercase text-blue-900 md:text-4xl">Global Trade Inquiries.</h2>
//           <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-gray-600">Contact our Singapore trading desk for bulk commodity sourcing, logistics coordination, or partnership opportunities</p>
//         </div>

//         {/* grid */}
//         <div className="grid items-center justify-center gap-10 w-11/12 mx-auto grid-cols-5">
//           <div className="col-span-2">
//             ggk
//           </div>
//           <div className="col-span-3">
//             vvv
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import React from 'react'
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineClock,
} from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'

export default function ContactUs() {
  return (
    <section className="bg-[#f7f6f6] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-[#173f96]">
            Connect With Us
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#173f96] md:text-6xl">
            Global Trade Inquiries.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Contact our Singapore trading desk for bulk commodity sourcing,
            logistics coordination, or partnership opportunities.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Left Card */}
          <div className="rounded-sm bg-[#173f96] p-10 h-fit text-white shadow-2xl lg:col-span-2">
            {/* Headquarters */}
            <div className="flex items-start gap-4">
              <div className="mt-1 text-3xl">
                <HiOutlineLocationMarker />
              </div>

              <div>
                <h3 className="text-lg font-black uppercase tracking-wide">
                  Headquarters
                </h3>

                <p className="mt-2 text-lg leading-8 text-white/95">
                  Greenbox Group SG
                  <br />
                  Woodland 11, woodland close,
                  <br />
                  unit 07-23 Singapore 737853
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mt-10 flex items-start gap-4">
              <div className="mt-1 text-3xl">
                <HiOutlineMail />
              </div>

              <div>
                <h3 className="text-lg font-black uppercase tracking-wide">
                  Email Us
                </h3>

                <p className="mt-2 text-lg text-white/95">
                  info@greenboxgroupsg.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-10 flex items-start gap-4">
              <div className="mt-1 text-3xl">
                <FiPhoneCall />
              </div>

              <div>
                <h3 className="text-lg font-black uppercase tracking-wide">
                  Trading Desk
                </h3>

                <p className="mt-2 text-lg text-white/95">+65 67344062</p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10 flex items-start gap-4">
              <div className="mt-1 text-3xl">
                <HiOutlineClock />
              </div>

              <div>
                <h3 className="text-lg font-black uppercase tracking-wide">
                  Business Hours
                </h3>

                <p className="mt-2 text-lg text-white/95">
                  Mon - Fri: 10:00 - 18:00 (SGT)
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-sm bg-white p-8 shadow-sm lg:col-span-3">
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Input label="Full Name" required />
              <Input label="Company Name" required />

              <Input label="Product Name" required />
              <Input label="Quantity" />

              <Input label="CIF To" />
              <Input label="Email" required type="email" />

              <Input label="WhatsApp / Wechat" required />
              <Input label="Buyer / Seller" required />

              <Input label="Country" required />
              <Input label="Qty Required" required />

              {/* Remark */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-[#1a1a1a]">
                  Remark <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows={3}
                  className="w-full resize-none border border-gray-300 px-3 py-2 outline-none transition focus:border-[#173f96]"
                />
              </div>

              {/* Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-[#173f96] px-10 py-4 text-lg font-black uppercase tracking-wide text-white transition hover:opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

type InputProps = {
  label: string
  required?: boolean
  type?: string
}

function Input({
  label,
  required = false,
  type = 'text',
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#1a1a1a]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        className="h-11 w-full border border-gray-300 px-3 outline-none transition focus:border-[#173f96]"
      />
    </div>
  )
}