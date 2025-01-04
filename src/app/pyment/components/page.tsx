"use client"

import { Head } from './head'
import { RentalForm } from './rental-form'
import { RentalSummary } from './rental-summary'
import { Footeres } from './footeres'



export default function Pyment () {
    return (
        <div>

            <div className="min-h-screen flex flex-col">
                <Head />
                <main className="flex-1 container mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <RentalForm />
                        </div>
                        <div className="lg:col-span-1">
                            <RentalSummary />
                        </div>
                    </div>
                </main>
                <Footeres />
            </div>
        </div>
    )
}