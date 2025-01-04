export default function SearchForm() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Pick-Up</h3>
                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label htmlFor="pickup-location" className="block text-sm text-gray-600">Locations</label>
                        <select id="pickup-location" className="w-full border rounded px-2 py-1">
                            <option>Select your city</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pickup-date" className="block text-sm text-gray-600">Date</label>
                        <select id="pickup-date" className="w-full border rounded px-2 py-1">
                            <option>Select your date</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pickup-time" className="block text-sm text-gray-600">Time</label>
                        <select id="pickup-time" className="w-full border rounded px-2 py-1">
                            <option>Select your time</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Drop-Off</h3>
                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label htmlFor="dropoff-location" className="block text-sm text-gray-600">Locations</label>
                        <select id="dropoff-location" className="w-full border rounded px-2 py-1">
                            <option>Select your city</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dropoff-date" className="block text-sm text-gray-600">Date</label>
                        <select id="dropoff-date" className="w-full border rounded px-2 py-1">
                            <option>Select your date</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dropoff-time" className="block text-sm text-gray-600">Time</label>
                        <select id="dropoff-time" className="w-full border rounded px-2 py-1">
                            <option>Select your time</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

