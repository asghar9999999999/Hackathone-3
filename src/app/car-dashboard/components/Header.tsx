import Image from 'next/image'
import { Bell, Settings, Search } from 'lucide-react'

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">MORENT</div>
                <div className="flex-grow mx-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search something here"
                            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Bell className="h-6 w-6 text-gray-600" />
                    <Settings className="h-6 w-6 text-gray-600" />
                    <Image
                        src="/p2.png"
                        alt="User profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
            </div>
        </header>
    )
}

