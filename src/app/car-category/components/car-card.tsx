"use client"

import Image from 'next/image'
import { Heart,  Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import type { Car } from './car'

import Link from 'next/link'

interface CarCardProps {
    car: Car
}

export function CarCard({ car }: CarCardProps) {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">{car.name}</h3>
                        <p className="text-sm text-muted-foreground">{car.type}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                        <Heart className="h-5 w-5" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <div className="relative aspect-[4/3]">
                    <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-contain"
                    />
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {car.capacity.people} People
                    </div>
                    <div>{car.transmission}</div>
                    <div>{car.fuelCapacity}L</div>
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4">
                <div>
                    <p className="text-lg font-bold">${car.price.current}/day</p>
                    {car.price.original && (
                        <p className="text-sm text-muted-foreground line-through">
                            ${car.price.original}
                        </p>
                    )}
                </div>
                <Link href="/car-dashboard/components"> <Button>Rent Now</Button> </Link>
            </CardFooter>
        </Card>
    )
}

