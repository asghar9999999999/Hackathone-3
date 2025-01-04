export interface Car {
    id: string
    name: string
    type: 'Sport' | 'SUV' | 'MPV' | 'Sedan' | 'Coupe' | 'Hatchback'
    image: string
    capacity: {
        people: number
        luggage: number
    }
    transmission: 'Manual' | 'Electric'
    fuelCapacity: number
    price: {
        current: number
        original?: number
    }
}

export type LocationType = {
    city: string
    date: string
    time: string
}

