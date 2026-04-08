import Sherina from '../assets/sherina.svg';
import Ujang from '../assets/ujang.svg';

export default function Review() {
    return(
         <section className="py-20 bg-[#FAFBFF] font-sans">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-[#3A3D42] mb-4">Here From Our Customer</h2>
                <p className="text-[#6A6A6A] max-w-2xl mx-auto mb-16 leading-relaxed">
                    We always do our best for our customers to stay comfortable using the applications we provide
                </p>

                <div className="relative flex items-center justify-center">
                    
                    <button className="absolute left-0 hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md text-gray-400 hover:text-blue-600 transition-all">
                        <span className="text-xl">←</span>
                    </button>

                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        
                        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-50 w-full md:w-87 text-center">
                            <img 
                                src={Sherina} 
                                alt="Sherina Claw" 
                                className="w-16 h-16 rounded-2xl object-cover mb-4 shadow-sm"
                            />
                            <h3 className="text-lg font-bold text-[#3A3D42] mb-1">Sherina Claw</h3>
                            <div className="flex items-center justify-center gap-1 mb-6">
                                <span className="text-[#FF9F24] text-xs">★ ★ ★ ★ ★</span>
                                <span className="text-gray-400 text-sm ml-1 font-semibold">5.0</span>
                            </div>
                            <div className="text-[#6379F4] text-4xl mb-4 font-serif leading-none">“</div>
                            <p className="text-[#6A6A6A] leading-relaxed text-sm">
                                "I use this app since 2 years ago and this is the best app that I've ever use in my entire life"
                            </p>
                        </div>

                        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-50 w-full md:w-87 text-center">
                            <img 
                                src="" 
                                alt="James Bond" 
                                className="w-16 h-16 rounded-2xl object-cover mb-4 shadow-sm"
                            />
                            <h3 className="text-lg font-bold text-[#3A3D42] mb-1">James Bond</h3>
                            <div className="flex items-center justify-center gap-1 mb-6">
                                <span className="text-[#FF9F24] text-xs">★ ★ ★ ★ ★</span>
                                <span className="text-gray-400 text-sm ml-1 font-semibold">5.0</span>
                            </div>
                            <div className="text-[#6379F4] text-4xl mb-4 font-serif leading-none">“</div>
                            <p className="text-[#6A6A6A] leading-relaxed text-sm">
                                "I use Zwallet to manage all financial needs. It's super easy to use and it's 100% free app"
                            </p>
                        </div>

                        <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-50 w-full md:w-87 text-center">
                            <img 
                                src={Ujang}
                                alt="Ujang Kayu" 
                                className="w-16 h-16 rounded-2xl object-cover mb-4 shadow-sm"
                            />
                            <h3 className="text-lg font-bold text-[#3A3D42] mb-1">Ujang Kayu</h3>
                            <div className="flex items-center justify-center gap-1 mb-6">
                                <span className="text-[#FF9F24] text-xs">★ ★ ★ ★ ★</span>
                                <span className="text-gray-400 text-sm ml-1 font-semibold">5.0</span>
                            </div>
                            <div className="text-[#6379F4] text-4xl mb-4 font-serif leading-none">“</div>
                            <p className="text-[#6A6A6A] leading-relaxed text-sm">
                                "Since I'm using this app, I'm not going to move to another similar app. Thank you Zwallet!"
                            </p>
                        </div>

                    </div>

                    <button className="absolute right-0 hidden lg:flex items-center justify-center w-12 h-12 bg-[#6379F4] rounded-full shadow-lg text-white hover:bg-blue-700 transition-all">
                        <span className="text-xl">→</span>
                    </button>
                </div>

                <div className="flex justify-center items-center gap-3 mt-12">
                    <div className="w-6 h-2 bg-[#6379F4] rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}