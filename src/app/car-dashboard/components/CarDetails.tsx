import Image from 'next/image'
import { Star, Heart } from 'lucide-react'
import Link from 'next/link'
export default function CarDetails() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                    <div className="bg-blue-600 rounded-lg p-6 text-white mb-4">
                        <h2 className="text-2xl font-bold mb-2">Sports car with the best design and acceleration</h2>
                        <p className="mb-4">Safety and comfort while driving a futuristic and elegant sports car.</p>
                        <Image
                            src="/pic 2.png"
                            alt="Nissan GT-R"
                            width={400}
                            height={200}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Image
                            src="/pi 7.jpg"
                            alt="Nissan GT-R Thumbnail 1"
                            width={100}
                            height={100}
                            className="w-1/3 h-auto object-cover rounded-lg"
                        />
                        <Image
                            src="/pi 8.jpg"
                            alt="Nissan GT-R Thumbnail 2"
                            width={100}
                            height={100}
                            className="w-1/3 h-auto object-cover rounded-lg"
                        />
                        <Image
                            src="/pi9.jpg"
                            alt="Nissan GT-R Thumbnail 3"
                            width={100}
                            height={100}
                            className="w-1/3 h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-3xl font-bold">Nissan GT-R</h1>
                        <Heart className="text-red-500 cursor-pointer" />
                    </div>
                    <div className="flex items-center mb-4">
                        <Star className="text-yellow-400 fill-current" />
                        <Star className="text-yellow-400 fill-current" />
                        <Star className="text-yellow-400 fill-current" />
                        <Star className="text-yellow-400 fill-current" />
                        <Star className="text-gray-300" />
                        <span className="ml-2 text-gray-600">440+ Reviewer</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                        NISMO has become the embodiment of Nissans outstanding performance inspired by the most unforgiving proving ground the race track.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <p className="text-gray-600">Type Car</p>
                            <p className="font-semibold">Sport</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Capacity</p>
                            <p className="font-semibold">2 Person</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Steering</p>
                            <p className="font-semibold">Manual</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Gasoline</p>
                            <p className="font-semibold">70L</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-3xl font-bold">$80.00/</span>
                            <span className="text-gray-600">day</span>
                        </div>
                       <Link  href = '/pyment/components'> <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Rent Now
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

