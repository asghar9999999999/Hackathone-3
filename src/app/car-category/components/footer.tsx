import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            MORENT
                        </Link>
                        <p className="text-sm text-gray-500">
                            Our vision is to provide convenience and help increase your sales business.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">About</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">How it works</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Featured</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Partnership</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Business Relation</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">Community</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Events</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Blog</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Podcast</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Invite a friend</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">Socials</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Discord</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Instagram</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Twitter</Link></li>
                            <li><Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Facebook</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t">
                    <p className="text-sm text-gray-500">Creator By Ali Asghar | 2024</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy & Policy</Link>
                        <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms & Condition</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

