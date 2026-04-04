function AuthLayout({image, children}) {
    return (
        <main className="md:flex  md:min-h-screen md:bg-blue-600">
            <div className="w-full md:w-1/2 md:rounded-r-4xl  bg-[#FFFFFF] px-10 py-30 md:py-20 md:px-22 md:pb-2.5">
                {children}
            </div>
            <div className="  hidden md:w-1/2 bg-blue-600 md:flex items-center justify-center">
                {image}
            </div>
        </main>
    );
}

export default AuthLayout