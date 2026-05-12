import React, { useState } from 'react'
import { Link } from 'react-router'
import { country } from '../constant'
import { useEffect } from "react";

const locations = [
    { name: "Singapore", position: [1.3521, 103.8198] },
    { name: "Malaysia", position: [4.2105, 101.9758] },
    { name: "Kenya", position: [-1.2921, 36.8219] },
    { name: "USA", position: [40.7128, -74.006] },
    { name: "Egypt", position: [30.0444, 31.2357] },
    { name: "India", position: [20.5937, 78.9629] },
    { name: "Portugal", position: [38.7223, -9.1393] },
];


export default function Footer() {
    const [Map, setMap] = useState<any>(null);

    useEffect(() => {
        async function loadMap() {
            const L = await import("leaflet");
            await import("leaflet/dist/leaflet.css");
            const ReactLeaflet = await import("react-leaflet");

            delete (L.default.Icon.Default.prototype as any)._getIconUrl;

            L.default.Icon.Default.mergeOptions({
                iconRetinaUrl:
                    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                iconUrl:
                    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                shadowUrl:
                    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
            });

            setMap(ReactLeaflet);
        }

        loadMap();
    }, []);

    return (
        <div>

            {/* MAP */}
            <div className="h-[450px] w-full">
                {Map ? (
                    <Map.MapContainer
                        center={[20, 20]}
                        zoom={2}
                        scrollWheelZoom={false}
                        className="h-full w-full"
                    >
                        <Map.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        {locations.map((loc, i) => (
                            <Map.Marker
                                key={i}
                                position={loc.position as [number, number]}
                            >
                                <Map.Popup>{loc.name}</Map.Popup>
                            </Map.Marker>
                        ))}
                    </Map.MapContainer>
                ) : (
                    <div className="h-full w-full bg-gray-100 animate-pulse" />
                )}
            </div>

            <div className='w-11/12 mx-auto'>
                {/* footer header */}
                <div className="flex items-center justify-between pb-10 mb-10 border-b">
                    <div className="text-blue-900">
                        <div className="font-extrabold text-[2rem]">For more information!</div>
                        <div className="font-bold text-xl">You can contact us.</div>
                    </div>
                    <div className="bg-blue-900 text-white py-4 px-5"> <Link to='/contact-us'>CONTACT US</Link></div>
                </div>

                {/*countries  */}
                <div className="grid grid-cols-4 gap-5 text-gray-500 text-sm">
                    {country.map((item, i: React.Key) => (
                        <div className="" key={i}>
                            <div className="border-b w-[10rem]">
                                <div className="">{item.branch}</div>
                                <div className="font-extrabold text-lg">{item.country}</div>
                            </div>
                            <div className="mt-3">
                                <div className="mb-2 font-bold">{item.location}</div>
                                <div className="mb-2 font-semibold">{item.ceoname}</div>
                                <div className="mb-2">{item.address}</div>
                                <div className="mb-2">{item.email}</div>
                                <div className="font-bold">Tel: {item.phone}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
