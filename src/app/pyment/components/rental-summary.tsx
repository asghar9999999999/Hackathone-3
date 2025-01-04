import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function RentalSummary() {
    return (
        <div className="bg-white rounded-lg p-6 space-y-6 sticky top-6">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold">Rental Summary</h2>
                <p className="text-sm text-gray-500">
                    Prices may change depending on the length of the rental and the price of your rental car.
                </p>
            </div>

            <div className="flex items-center space-x-4">
                <Image
                    src="/pic 1.jpg"
                    alt="Nissan GT-R"
                    width={120}
                    height={80}
                    className="rounded-lg"
                />
                <div>
                    <h3 className="font-semibold">Nissan GT-R</h3>
                    <div className="flex items-center space-x-1">
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                            <Star className="w-4 h-4 fill-muted stroke-muted-foreground" />
                        </div>
                        <span className="text-sm text-gray-500">440+ Reviewer</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">$80.00</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">$0</span>
                </div>
            </div>

            <div className="flex space-x-2">
                <Input placeholder="Apply promo code" />
                <Button variant="outline">Apply now</Button>
            </div>

            <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-600">Total Rental Price</span>
                        <p className="text-xs text-gray-500">Overall price and includes rental discount</p>
                    </div>
                    <span className="text-2xl font-bold">$80.00</span>
                </div>
            </div>
        </div>
    )
}

