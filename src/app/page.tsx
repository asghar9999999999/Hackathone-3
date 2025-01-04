"use client"

import Headers from './components/Headers'
import HeroBanner from './components/HeroBanner'
import SearchForm from './components/SearchForm'
import CarList from './components/CarList'
import Footers from './components/Footers'
import Link from 'next/link'

export default function Home() {
    return (

        <div className="min-h-screen bg-gray-100">
             <Headers />
            <main className="flex-grow container mx-auto px-4 py-8">
                <HeroBanner />
                <SearchForm />
                <CarList title="Popular Car" viewAllLink="#" />
                <CarList title="Recommendation Car" viewAllLink="#" />
                <div className="text-center mt-8">
                   <Link href = "/car-category/components"> <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                        Show more car
                    </button> </Link>
                </div>
                <Footers/>
              
            </main>
        </div>
        
    )
} 


