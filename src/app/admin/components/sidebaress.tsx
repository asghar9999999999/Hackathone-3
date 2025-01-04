"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, CalendarDays, Car, HelpCircle, Home, LogOut, MessageSquare, Settings, Wallet } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarItems = [
    {
        title: "MAIN MENU",
        items: [
            {
                title: "Dashboard",
                icon: Home,
                href: "/",
            },
            {
                title: "Car Rent",
                icon: Car,
                href: "/car-rent",
            },
            {
                title: "Insight",
                icon: BarChart3,
                href: "/insight",
            },
            {
                title: "Reimburse",
                icon: Wallet,
                href: "/reimburse",
            },
            {
                title: "Inbox",
                icon: MessageSquare,
                href: "/inbox",
            },
            {
                title: "Calendar",
                icon: CalendarDays,
                href: "/calendar",
            },
        ],
    },
    {
        title: "PREFERENCES",
        items: [
            {
                title: "Settings",
                icon: Settings,
                href: "/settings",
            },
            {
                title: "Help & Center",
                icon: HelpCircle,
                href: "/help",
            },
        ],
    },
]

export function Sidebaress() {
    const pathname = usePathname()

    return (
        <div className="flex h-screen w-64 flex-col border-r bg-white">
            <div className="p-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-blue-600">
                    MORENT
                </Link>
            </div>
            <ScrollArea className="flex-1 px-3">
                {sidebarItems.map((group, i) => (
                    <div key={i} className="mb-8">
                        <div className="mb-4 px-4 text-xs font-semibold text-gray-400">
                            {group.title}
                        </div>
                        <div className="space-y-1">
                            {group.items.map((item, i) => (
                                <Button
                                    key={i}
                                    asChild
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start gap-3 hover:bg-gray-100",
                                        pathname === item.href && "bg-blue-600 text-white hover:bg-blue-600"
                                    )}
                                >
                                    <Link href={item.href}>
                                        <item.icon className="h-4 w-4" />
                                        {item.title}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </ScrollArea>
            <div className="border-t p-3">
                <Button variant="ghost" className="w-full justify-start gap-3 text-gray-500">
                    <LogOut className="h-4 w-4" />
                    Log Out
                </Button>
            </div>
        </div>
    )
}

