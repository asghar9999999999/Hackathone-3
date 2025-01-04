'use client'

import { FlipVerticalIcon as SwapVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export function LocationPicker() {
    return (
        <div className="grid gap-4 rounded-lg bg-white p-6 shadow-sm lg:grid-cols-2">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-primary" />
                    <span className="font-medium">Pick - Up</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="la">Los Angeles</SelectItem>
                            <SelectItem value="ch">Chicago</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your date" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="tomorrow">Tomorrow</SelectItem>
                            <SelectItem value="next">Next Week</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10:00 AM</SelectItem>
                            <SelectItem value="11">11:00 AM</SelectItem>
                            <SelectItem value="12">12:00 PM</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button variant="ghost" className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
                <SwapVertical className="h-6 w-6" />
            </Button>
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-blue-400" />
                    <span className="font-medium">Drop - Off</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="la">Los Angeles</SelectItem>
                            <SelectItem value="ch">Chicago</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your date" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="tomorrow">Tomorrow</SelectItem>
                            <SelectItem value="next">Next Week</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10:00 AM</SelectItem>
                            <SelectItem value="11">11:00 AM</SelectItem>
                            <SelectItem value="12">12:00 PM</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

