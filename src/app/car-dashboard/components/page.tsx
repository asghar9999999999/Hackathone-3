import Header from './Header'
import Sidebar from './Sidebar'
import CarDetails from './CarDetails'
import RecentCars from './RecentCars'
import RecommendedCars from './RecommendedCars'
import Footer from './Footer'


export default function CarDashboard () {
    return (
        <div>

            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <Sidebar />
                    <div className="flex-grow">
                        <CarDetails />
                        <RecentCars />
                        <RecommendedCars />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}