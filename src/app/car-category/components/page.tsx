"use client"

import { Sidebars } from './sidebars'
import { LocationPicker } from './location-picker'
import { CarCard } from './car-card'
import type { Car } from './car'
import {Header} from './header'
import {Footer} from './footer'

const cars: Car[] = [
    {
        id: '1',
        name: 'Koenigsegg',
        type: 'Sport',
        image: '/pic 1.jpg',
        capacity: {
            people: 9,
            luggage: 4
        },
        transmission: 'Manual',
        fuelCapacity: 90,
        price: {
            current: 99.00,
        }
    },


    {
        id: '2',
        name: 'Lavi Don',
        type: 'Sport',
        image: '/pi9.jpg',
        capacity: {
            people: 10,
            luggage: 7
        },
        transmission: 'Manual',
        fuelCapacity: 90,
        price: {
            current: 99.00,
        }
    },


    {
        id: '3',
        name: 'Matoraly',
        type: 'Sport',
        image: '/pic 3.jpg',
        capacity: {
            people: 11,
            luggage: 22
        },
        transmission: 'Manual',
        fuelCapacity: 90,
        price: {
            current: 99.00,
        }
    },

    {
        id: '4',
        name: 'Fater',
        type: 'Sport',
        image: '/pic 1.jpg',
        capacity: {
            people: 13,
            luggage: 7
        },
        transmission: 'Manual',
        fuelCapacity: 90,
        price: {
            current: 99.00,
        }
    },


    {
        id: '5',
        name: 'PAL Crow',
        type: 'Sport',
        image: '/pic 4.jpeg',
        capacity: {
            people: 13,
            luggage: 6
        },
        transmission: 'Manual',
        fuelCapacity: 90,
        price: {
            current: 99.00,
        }
    },

    {
        id: '6',
        name: 'MG Fire',
        type: 'Sport',
        image: '/pic 5.jpg',
        capacity: {
            people: 9,
            luggage: 4
        },
        transmission: 'Manual',
        fuelCapacity: 90,
        price: {
            current: 99.00,
        }
    },

    {
        id: '7',
        name: 'Cr V',
        type: 'Sport',
        image: '/pic 3.jpg',
        capacity: {
            people: 4,
            luggage: 7
        },
        transmission: 'Manual',
        fuelCapacity: 90,
        price: {
            current: 99.00,
        }
    },

    {
        id: '8',
        name: 'Nissan GT-R',
        type: 'Sport',
        image: '/pic 5.jpg',
        capacity: {
            people: 7,
            luggage: 2
        },
        transmission: 'Manual',
        fuelCapacity: 80,
        price: {
            current: 80.00,
            original: 100.00
        }
    },
    {
        id: '9',
        name: 'All New Rush',
        type: 'SUV',
        image: '/pic 4.jpeg',
        capacity: {
            people: 6,
            luggage: 12
        },
        transmission: 'Manual',
        fuelCapacity: 70,
        price: {
            current: 72.00,
            original: 80.00
        }
    },
   
]



    export default function CarCategory () {
        return (
            <div>
                < div className="container px-4 py-6" >
                    <LocationPicker />
                    <div className="mt-8 grid lg:grid-cols-[280px_1fr] gap-8">
                        <Sidebars />
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {cars.map(car => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                    </div>
< Header/>
< Footer />
                </div > 
            </div>
        )
    }