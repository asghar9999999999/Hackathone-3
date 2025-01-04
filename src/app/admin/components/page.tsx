"use client"

import { Headeress } from "./headeress"
import { RentalDetails } from "./rental-details"
import { Sidebaress } from "./sidebaress"
import { TopRentals } from "./top-rentals"

export default function Page() {
    return (
        <div className="flex min-h-screen">
            <Sidebaress />
            <div className="flex-1">
                <Headeress />
                <main className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <RentalDetails />
                        <TopRentals />
                    </div>
                </main>
            </div>
        </div>
    )
}

