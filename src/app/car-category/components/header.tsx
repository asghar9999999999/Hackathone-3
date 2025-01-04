import { Bell, Heart, Settings } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="text-2xl font-bold text-blue-600">MORENT</div>
                <div className="hidden flex-1 items-center justify-center px-12 lg:flex">
                    <div className="relative w-full max-w-lg">
                        <Input
                            className="w-full pl-4 pr-10"
                            placeholder="Search something here"
                            type="search"
                        />
                        <Button
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            variant="ghost"
                        >
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                    </Button>
                    <Avatar>
                        <AvatarImage src="/p1.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}

