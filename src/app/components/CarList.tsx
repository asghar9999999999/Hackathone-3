import Image from 'next/image'
import Link from 'next/link'

interface Car {
    id: number
    name: string
    type: string
    image: string
    capacity: number
    transmission: string
    price: number
}

const cars: Car[] = [
    { id: 1, name: 'Koenigsegg', type: 'Sport', image: '/pic 1.jpg', capacity: 2, transmission: 'Manual', price: 99.00 },
    { id: 2, name: 'Nissan GT - R', type: 'Sport', image: '/pic 5.jpg', capacity: 2, transmission: 'Manual', price: 80.00 },
    { id: 3, name: 'Rolls - Royce', type: 'Sedan', image: '/pic 3.jpg', capacity: 4, transmission: 'Manual', price: 96.00 },
    { id: 4, name: 'Nissan GT - R', type: 'Sport', image: '/pic 4.jpeg', capacity: 2, transmission: 'Manual', price: 80.00 },
]

interface CarListProps {
    title: string
    viewAllLink: string
}

export default function CarList({ title, viewAllLink }: CarListProps) {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <Link href={viewAllLink} className="text-blue-500">
                    View All
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cars.map((car) => (
                    <div key={car.id} className="bg-white rounded-lg shadow p-4">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-semibold">{car.name}</h3>
                                <p className="text-sm text-gray-500">{car.type}</p>
                            </div>
                            <button className="text-red-500">
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </button>
                        </div>
                        <Image
                            src={car.image}
                            alt={car.name}
                            width={200}
                            height={100}
                            className="w-full object-cover mb-4"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M720H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20H2v-2c0-.656.126-1.283.356-1.857"></path>
                                </svg>
                                {car.capacity} People
                            </span>
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                {car.transmission}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="font-bold">${car.price.toFixed(2)}</span>
                                <span className="text-sm text-gray-500">/day</span>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                Rent Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

