import type { ReactNode } from "react"
import { FiMonitor } from "react-icons/fi"
import { GoShieldCheck, GoStack } from "react-icons/go"
import { HiMagnifyingGlassPlus } from "react-icons/hi2"
import { RiGlobalLine } from "react-icons/ri"

import {
  FaShieldAlt,
  FaChartLine,
  FaTruckMoving,
  FaArrowRight,
} from 'react-icons/fa'

export const country = [
  {
    branch: 'Headquarter',
    country: 'SINGAPORE',
    location: 'GREENBOX GROUP SG',
    ceoname: 'Mr R Parki (CEO)',
    address: 'Woodland 11, woodland close, unit 07-23 Singapore 737853',
    email: 'parki@greenboxgroupsg.com',
    phone: '+65 67344062 | C/W: +65 91088496',
  },
  {
    branch: 'Headquarter',
    country: 'SINGAPORE',
    location: 'GREENBOX GROUP SG',
    ceoname: 'Mr R Parki (CEO)',
    address: 'Woodland 11, woodland close, unit 07-23 Singapore 737853',
    email: 'parki@greenboxgroupsg.com',
    phone: '+65 67344062 | C/W: +65 91088496',
  },
  {
    branch: 'Headquarter',
    country: 'SINGAPORE',
    location: 'GREENBOX GROUP SG',
    ceoname: 'Mr R Parki (CEO)',
    address: 'Woodland 11, woodland close, unit 07-23 Singapore 737853',
    email: 'parki@greenboxgroupsg.com',
    phone: '+65 67344062 | C/W: +65 91088496',
  },
  {
    branch: 'Headquarter',
    country: 'SINGAPORE',
    location: 'GREENBOX GROUP SG',
    ceoname: 'Mr R Parki (CEO)',
    address: 'Woodland 11, woodland close, unit 07-23 Singapore 737853',
    email: 'parki@greenboxgroupsg.com',
    phone: '+65 67344062 | C/W: +65 91088496',
  },
  {
    branch: 'Headquarter',
    country: 'SINGAPORE',
    location: 'GREENBOX GROUP SG',
    ceoname: 'Mr R Parki (CEO)',
    address: 'Woodland 11, woodland close, unit 07-23 Singapore 737853',
    email: 'parki@greenboxgroupsg.com',
    phone: '+65 67344062 | C/W: +65 91088496',
  },
  {
    branch: 'Headquarter',
    country: 'SINGAPORE',
    location: 'GREENBOX GROUP SG',
    ceoname: 'Mr R Parki (CEO)',
    address: 'Woodland 11, woodland close, unit 07-23 Singapore 737853',
    email: 'parki@greenboxgroupsg.com',
    phone: '+65 67344062 | C/W: +65 91088496',
  },
]


export const slider = [
  { name: 'SGS INSPECTED', icon: HiMagnifyingGlassPlus },
  { name: 'HACCP CERTIFIED', icon: GoStack },
  { name: 'GLOBAL STANDARDS', icon: RiGlobalLine },
  { name: 'TRADE COMPLIANCE', icon: FiMonitor },
  { name: 'ISO 9001:2015', icon: GoShieldCheck },
]

export const faqData = [
  {
    question: "What are your typical lead times for bulk commodities?",
    answer:
      "Lead times vary by sector. For Meat and Seafood, we typically operate on a 14–21 day window from LC confirmation to port loading. Industrial metals and minerals depend on current mining output and shipping lane availability.",
  },
  {
    question:
      "How do you ensure quality compliance across different borders?",
    answer:
      "We work with internationally certified inspection agencies and maintain strict compliance documentation for every shipment including SGS verification and export certifications.",
  },
  {
    question:
      "Do you handle end-to-end logistics including customs?",
    answer:
      "Yes. Our logistics network covers sourcing, freight forwarding, customs clearance, warehousing, and final delivery coordination.",
  },
  {
    question:
      "What are the minimum order quantities (MOQ) for industrial sourcing?",
    answer:
      "MOQ depends on the commodity category and supplier region. Most industrial products start from one container load or negotiated bulk contracts.",
  },
];
export const features = [
  {
    icon: <FaShieldAlt />,
    title: 'INTEGRITY & COMPLIANCE',
    desc: 'Operating out of Singapore, we adhere to the highest international standards of trade transparency and ISO-verified quality control.',
  },
  {
    icon: <FaChartLine />,
    title: 'MARKET INTELLIGENCE',
    desc: 'Our traders leverage real-time data to navigate volatile commodity markets, providing our clients with stable pricing and risk mitigation.',
  },
  {
    icon: <FaTruckMoving />,
    title: 'LOGISTICS EXCELLENCE',
    desc: 'From port-to-port security to complex cold-chain protein transport, our logistics network is built for speed and reliability.',
  },
]

export const stats = [
  {
    value: '30+',
    label: 'COMMODITIES MANAGED',
  },
  {
    value: '5',
    label: 'GLOBAL TRADING HUBS',
  },
  {
    value: '15+',
    label: 'YEARS OF EXPERTISE',
  },
  {
    value: '100%',
    label: 'COMPLIANCE RECORD',
  },
]
export const product = [
  {
    image: '/public/1.png', title: 'Metals', link: '', linkName: 'VIEW SPECS', category: [
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },

    ]
  },
  {
    image: '/public/1.png', title: 'Agricultural', link: '', linkName: 'VIEW SPECS', category: [
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },

    ]
  },
  {
    image: '/public/1.png', title: 'Industrial', link: '', linkName: 'VIEW SPECS', category: [
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
    ]
  },
  {
    image: '/public/1.png', title: 'Energy', link: '', linkName: 'VIEW SPECS', category: [
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
    ]
  },
  {
    image: '/public/1.png', title: 'Livestock', link: '', linkName: 'VIEW SPECS', category: [
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
      { name: 'steel' },
    ]
  },
]

export const offers = [
  {
    image:
      '/public/1.png',
    product: 'Urea 46% (Prilled)',
    category: 'SULPHUR',
    description:
      'Agricultural Grade Nitrogen. Moisture 0.5% max. Biuret 1.0% max. Direct factory supply.',
    extra:
      'Granular Sulfur - Purity: 99.5% or 99.8% · Form: Granular / spherical · Color: Bright yellow · Particle size: Typically 2-6 mm',
    qty: '20,000 MT',
    origin: ['Russia', 'Kazakhstan', 'Iran'],
  },
  {
    image:
      '/public/1.png',
    product: 'Coal',
    category: '',
    description:
      'Indonesian Steam Coal GCV/GAR (ARB) 3800-4500',
    qty: '25,000 MT',
    origin: ['Indonesia'],
  },
  {
    image:
      '/public/1.png',
    product: 'Aluminium P1020',
    category: '',
    description:
      '99.7% Pure High-Grade Ingots. LME registered brand. Available for spot release.',
    qty: '5,000 MT',
    origin: ['India', 'Vietnam', 'Kazakhstan', 'Thailand'],
  },
  {
    image:
      '/public/1.png',
    product: 'HMS 1 & 2 (80:20)',
    category: '',
    description:
      'Heavy Melting Steel Scrap. ISRI 200-206 compliant. Loading port inspection ready.',
    qty: '15,000 MT',
    origin: ['South Africa', 'Europe', 'UAE'],
  },
]