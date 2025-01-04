export default function Footer() {
    return (
        <footer className="bg-white shadow-md mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">MORENT</h3>
                        <p className="text-gray-600">Our vision is to provide convenience and help increase your sales business.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">About</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">How it works</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Featured</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Partnership</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Business Relation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Community</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Events</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Podcast</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Invite a friend</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Socials</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Discord</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-8 flex justify-between items-center">
                    <p className="text-gray-600"> Creator By Ali Asghar | 2024</p>
                    <div className="space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600">Privacy & Policy</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

