import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link href="/" className="text-blue-600 text-2xl font-bold">
                            MORENT
                        </Link>
                        <p className="mt-2 text-sm text-gray-600">
                            Our vision is to provide convenience and help increase your sales business.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">About</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">How it works</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Featured</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Partnership</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Business Relation</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Community</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Events</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Blog</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Podcast</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Invite a friend</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Socials</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Discord</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Instagram</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Twitter</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Facebook</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-600">Creator By Ali Asghar | 2024</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Privacy & Policy</Link>
                        <Link href="#" className="text-sm text-gray-600 hover:text-blue-500">Terms & Condition</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

