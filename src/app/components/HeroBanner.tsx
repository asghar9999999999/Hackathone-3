import Image from 'next/image'

export default function HeroBanner() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-100 rounded-lg p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">The Best Platform for Car Rental</h2>
                    <p className="text-gray-600 mb-4">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                </div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg self-start">
                    Rental Car
                </button>
                <Image
                    src="/pic 2.png"
                    alt="Sports Car"
                    width={600}
                    height={300}
                    className="mt-4"
                />
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-6 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Easy way to rent a car at a low price</h2>
                    <p className="mb-4">Providing cheap car rental services and safe and comfortable facilities.</p>
                </div>
                <button className="bg-white text-blue-500 px-6 py-2 rounded-lg self-start">
                    Rental Car
                </button>
                <Image
                    src="/pic 6.png"
                    alt="Sports Car"
                    width={550}
                    height={300}
                    className="mt-4"
                />
            </div>
        </div>
    )
}

