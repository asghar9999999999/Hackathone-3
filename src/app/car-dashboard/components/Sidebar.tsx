export default function Sidebar() {
    return (
        <aside className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">TYPE</h2>
            <div className="space-y-2">
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">Sport (14)</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">SUV (8)</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">MPV(12)</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">Sedan (9)</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">Coupe (19)</span>
                </label>
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-4">CAPACITY</h2>
            <div className="space-y-2">
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">2 Person (12)</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">4 Person (8)</span>
                </label>
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">6 Person (7)</span>
                </label>

                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">8 Person (10)</span>
                </label>

                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox text-blue-600" />
                    <span className="ml-2">10 Person (13)</span>
                </label>
            </div>


            <h2 className="text-lg font-semibold mt-6 mb-4">PRICE</h2>
            <input
                type="range"
                min="0"
                max="100"
                className="w-full"
            />
            <div className="flex justify-between mt-2">
                <span>$0</span>
                <span>Max. $100.00</span>
            </div>
        </aside>
    )
}

