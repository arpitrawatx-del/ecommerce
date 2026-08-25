function Footer() {
    return (
        <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 mt-auto dark:from-gray-900 dark:to-black">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-indigo-400">Electronic Shopping</h3>
                        <p className="text-slate-400 text-sm mt-1">Your one-stop shop for electronics</p>
                    </div>
                    <div className="flex gap-6 text-sm text-slate-300">
                        <span className="hover:text-white cursor-pointer transition-colors">About Us</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                    </div>
                </div>
                <div className="border-t border-slate-700 mt-4 pt-4 text-center text-slate-400 text-sm">
                    <p>&copy; 2026 Electronic Shop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
