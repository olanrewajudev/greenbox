import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function SingleProduct() {
  const products = [
    {
      category: "Steel Billets",
      specs: "3SP / 5SP (130mm x 130mm)",
    },
    {
      category: "Reinforcing Bar (Rebar)",
      specs: "Grade 60 / B500B / FE500",
    },
    {
      category: "Hot-Rolled Coils (HRC)",
      specs: "ASTM A36 / S235JR",
    },
    {
      category: "Wire Rods",
      specs: "SAE 1006 / SAE 1008",
    },
    {
      category: "I-Beams & Channels",
      specs: "S275JR / S355JR",
    },
  ];

  const faqs = [
    {
      question: "What steel grades do you typically stock?",
      answer:
        "We commonly stock ASTM, BS, and JIS compliant grades including Grade 60, FE500, S235JR, S355JR, SAE 1006, and more depending on project requirements.",
    },
    {
      question: "Can you manage break-bulk shipping for large projects?",
      answer:
        "Yes. We coordinate bulk vessel shipments, break-bulk cargo, and containerized logistics for infrastructure and industrial projects globally.",
    },
    {
      question: "Are the products LME registered?",
      answer:
        "Selected products and mills are LME registered depending on origin and specification requirements. Please contact our trading desk for confirmation.",
    },
    {
      question: "What is the standard tolerance for weight?",
      answer:
        "Weight tolerance depends on the product category and applicable standards, typically within international ASTM and BS tolerances.",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] min-h-screen">
      {/* HERO */}
      <div className="px-6 py-16 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[4px] text-[#1e3a8a] text-sm font-semibold mb-6">
              Infrastructure & Construction Supply
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#123B8D] leading-tight mb-8">
              Structural Steel <br /> Portfolio
            </h1>

            <p className="text-gray-600 text-lg leading-9 max-w-xl mb-10">
              Premium supply of structural steel products, including Billets,
              Rebar, and Hot-Rolled Coils, engineered to meet international
              ASTM, BS, and JIS standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-4 rounded-full border border-gray-300 bg-white text-[#123B8D] font-semibold shadow-sm hover:shadow-md transition">
                Multiple Grades
              </button>

              <button className="px-6 py-4 rounded-full border border-gray-300 bg-white text-[#123B8D] font-semibold shadow-sm hover:shadow-md transition">
                Site-Ready Supply
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop"
              alt="Steel Rebars"
              className="w-full h-[500px] object-cover rounded-sm"
            />

            <div className="absolute bottom-6 left-6 bg-[#123B8D] text-white px-8 py-6 shadow-xl">
              <p className="uppercase tracking-[3px] text-xs mb-3">
                Standard Compliance
              </p>

              <h3 className="text-3xl font-bold">ASTM / BS / JIS</h3>
            </div>
          </div>
        </div>

        {/* PRODUCT SECTION */}
        {/* PRODUCT SECTION */}
        <div className="grid lg:grid-cols-[1.3fr_.8fr] gap-16 mt-28 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-5xl font-extrabold text-[#123B8D] mb-10 uppercase">
              Product Range
            </h2>

            {/* TABLE */}
            <div className="overflow-hidden border border-gray-200 bg-white">
              {/* HEADER */}
              <div className="grid grid-cols-2 bg-[#123B8D] text-white font-bold uppercase text-sm tracking-wide">
                <div className="p-5 border-r border-blue-700">
                  Product Category
                </div>

                <div className="p-5">Common Specs / Grades</div>
              </div>

              {/* ROWS */}
              {products.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 border-t border-gray-200"
                >
                  <div className="p-5 font-semibold text-[#2a2a2a] border-r border-gray-200">
                    {item.category}
                  </div>

                  <div className="p-5 text-[#2a2a2a] font-semibold">
                    {item.specs}
                  </div>
                </div>
              ))}
            </div>

            {/* CERTIFICATION BOX */}
            <div className="mt-8 border-l-4 border-[#123B8D] bg-[#f3f3f3] px-6 py-7">
              <p className="text-[18px] leading-9 text-gray-600">
                <span className="font-bold text-gray-700">
                  Certification:
                </span>{" "}
                All structural steel is provided with original Mill Test
                Certificates (MTC) and verified weight bridge reports to ensure
                structural compliance.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white border border-gray-200 rounded-sm p-10">
            <h3 className="text-[42px] font-extrabold text-[#123B8D] mb-6">
              Source Steel
            </h3>

            <p className="text-gray-500 text-[18px] leading-9 mb-10">
              Contact our Singapore trading desk for volume-based contract pricing
              and global delivery schedules.
            </p>

            <form className="grid grid-cols-2 gap-x-5 gap-y-8">
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

              {/* REMARK */}
              <div className="col-span-2">
                <label className="mb-3 block text-sm font-bold text-[#1a1a1a]">
                  Remark <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows={4}
                  className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-2 outline-none transition focus:border-[#123B8D]"
                />
              </div>

              {/* BUTTON */}
              <div className="col-span-2 pt-2">
                <button
                  type="submit"
                  className="bg-[#123B8D] px-8 py-3 text-lg font-medium text-white transition hover:bg-[#0f2f70]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="border-t border-gray-200 py-24 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-5xl font-extrabold text-[#123B8D] uppercase mb-16">
            Technical FAQ
          </h2>

          <div className="bg-transparent">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-gray-200 py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-extrabold uppercase text-[#123B8D] mb-8 leading-tight">
            Start Your Steel Procurement.
          </h2>

          <p className="text-xl text-gray-600 leading-9 mb-12">
            Connect with our trading desk for comprehensive spec sheets, MTC
            reports, and delivery logistics.
          </p>

          <button className="inline-flex items-center gap-3 bg-[#123B8D] hover:bg-[#0f2f70] transition text-white px-10 py-5 uppercase tracking-[2px] font-bold">
            Discuss Requirements
            <BsArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

type InputProps = {
  label: string;
  required?: boolean;
  type?: string;
};

function Input({
  label,
  required = false,
  type = "text",
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
  );
}

type FaqProps = {
  question: string;
  answer: string;
};

function FaqItem({ question, answer }: FaqProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left"
      >
        <span className="text-2xl font-extrabold text-[#123B8D]">
          {question}
        </span>

        {open ? (
          <BiMinus className="text-[#123B8D]" size={24} />
        ) : (
          <BiPlus className="text-[#123B8D]" size={24} />
        )}
      </button>

      {open && (
        <div className="pb-8 pr-10 text-gray-600 text-lg leading-8">
          {answer}
        </div>
      )}
    </div>
  );
}