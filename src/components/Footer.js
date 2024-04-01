function Footer() {
    return (
        <div>
            <div className="bg-orange-50 p-4 flex flex-col justify-start">
                <div className="flex flex-row justify-between text-black border-b-2 border-orange-100">
                    <div className='w-[700px] p-5 flex flex-col items-start justify-center'>
                        <h1 className="text-[30px] font-bold">PURESIP</h1>
                        <p className='font-normal text-slate-900'>Molestie at elementum eu facilisis sed odio morbi. Eget nulla facilisi etiam dignissim. Ac tortor vitae purus faucibus ornare.</p>
                    </div>
                    <div className='w-full p-5 flex flex-row items-start justify-evenly'>
                        <div>
                            <h1 className="font-bold text-[20px]">Contact Us</h1>
                            <div className="font-semibold text-[15px] text-slate-800">
                                <p className="pt-2">History</p>
                                <p className="pt-2">Wholesale</p>
                                <p className="pt-2">Brand Ambassadors</p>
                                <p className="pt-2">Payment Terms</p>
                                <p className="pt-2">Privacy Policy</p>
                                <p className="pt-2">Terms Of Use</p>
                            </div>

                        </div>
                        <div>
                            <h1 className="font-bold text-[20px]">Information</h1>
                            <div className="font-semibold text-[15px] text-slate-800">
                                <p className="pt-2">Support</p>
                                <p className="pt-2">Locate Us</p>
                                <p className="pt-2">Contact Us</p>
                                <p className="pt-2">Login</p>
                                <p className="pt-2">Faq</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[20px]">Support</h1>
                            <div className="font-semibold text-[15px] text-slate-600">
                                <p className="pt-2">New York</p>
                                <p className="pt-2">Los Angeles</p>
                                <p className="pt-2">Chicago</p>
                                <p className="pt-2">Houston</p>
                                <p className="pt-2">Washington</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[700px] p-5 flex flex-row items-start justify-evenly'>
                        <div>
                            <h1 className="font-bold text-[20px]">Sign Up To Newsletter</h1>
                            <div className="font-semibold text-[15px] text-slate-800">
                                <p className="pt-2">Cras sollicitudin eros sollicitudin vestibulum gravida. Sed id urna est. Nulla pellente.</p>
                                <input className="w-full mt-4 h-[40px] p-2 rounded" placeholder="Your email address" type="text" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[20px] bg-orange-50">

            </div>
        </div>


    )
}

export default Footer;