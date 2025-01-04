import Image from 'next/image'
import { Heart } from 'lucide-react'

const recentCars = [
    {
        id: 1,
        name: 'Koenigsegg',
        type: 'Sport',
        image: '/pic 1.jpg',
        capacity: '2 People',
        transmission: 'Manual',
        price: 99.00,
    },
    {
        id: 2,
        name: 'Nissan GT-R',
        type: 'Sport',
        image: '/pic 3.jpg',
        capacity: '2 People',
        transmission: 'Manual',
        price: 80.00,
    },
    {
        id: 3,
        name: 'Rolls-Royce',
        type: 'Sport',
        image: '/pic 4.jpeg',
        capacity: '4 People',
        transmission: 'Manual',
        price: 96.00,
    },
]

export default function RecentCars() {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Recent Car</h2>
                <a href="#" className="text-blue-600 hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentCars.map((car) => (
                    <div key={car.id} className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">{car.name}</h3>
                            <Heart className="text-gray-400 cursor-pointer hover:text-red-500" />
                        </div>
                        <p className="text-gray-600 mb-2">{car.type}</p>
                        <Image
                            src={car.image}
                            alt={car.name}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <div className="flex justify-between mb-4">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                <span>{car.capacity}</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                <span>{car.transmission}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-xl font-bold">${car.price.toFixed(2)}/</span>
                                <span className="text-gray-600">day</span>
                            </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                Rent Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

