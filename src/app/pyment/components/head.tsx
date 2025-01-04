import Link from 'next/link'
import { Bell, Heart, Settings, User } from 'lucide-react'

export function Head() {
    return (
        <header className="border-b bg-white">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    MORENT
                </Link>
                <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Bell className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Settings className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <User className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    )
}

