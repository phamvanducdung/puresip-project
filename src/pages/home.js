import React from 'react';

const Home = () => {

    return (
        <div className='relative'>
            <div className='relative m-8 mt-0'>
                <img className='z-5' src="https://dt-puresip.myshopify.com/cdn/shop/files/Slider_3_a2f8bea2-162e-433a-92d9-989535180364.jpg?v=1692258055&width=1500" alt="" />
                <div className='absolute inset-0 bg-white opacity-60 z-10' />
                <div className='absolute inset-y-44 inset-x-20 z-50  w-[500px]'>
                    <h1 className=' text-[55px] font-bold '>Summer Juices</h1>
                    <span className=' text-[18px] font-medium leading-8'>Venenatis urna cursus eget nunc. Volutpat lacus laoreet non curabitur gravida arcu. Iaculis urna id volutpat lacus. Fermentum dui faucibus in ornare quam.</span>
                    <br />
                    <button className='rounded-md bg-lime-500 z-50 text-white font-medium mt-6 w-[160px] h-[40px]'>Shop Now</button>
                </div>
            </div>
            <div className="grid grid-cols-3 m-8 text-black gap-6 h-[200px]">
                <div className='relative mt-0'>
                    <img className='z-5' src="https://dt-puresip.myshopify.com/cdn/shop/files/home_3_banner_1_14fd1c0a-f68b-4a5b-a560-3266fea5115e.jpg?v=1692257070&width=1500" alt="" />
                    <div className='absolute inset-y-12 inset-x-5 z-50 '>
                        <h4 className=' text-[20px] font-medium '>GET 20% OFF ON</h4>
                        <h4 className=' text-[25px] font-bold'>Fresh Fruit</h4>
                        <button className='rounded-md bg-lime-500 z-50 text-white font-medium mt-6 w-[160px] h-[40px]'>Shop Now</button>
                    </div>
                </div>
                <div className='relative mt-0'>
                    <img className='z-5' src="https://dt-puresip.myshopify.com/cdn/shop/files/home_3_banner_2_2e6afe6a-fce1-43b8-b1b4-ef552c64bc54.jpg?v=1692257116&width=1500" alt="" />
                    <div className='absolute inset-y-12 inset-x-5 z-50 '>
                        <h4 className=' text-[20px] font-medium '>GET 10% OFF ON</h4>
                        <h4 className=' text-[25px] font-bold'>Summer Cocktails</h4>
                        <button className='rounded-md bg-lime-500 z-50 text-white font-medium mt-6 w-[160px] h-[40px]'>Shop Now</button>
                    </div>
                </div>
                <div className='relative mt-0'>
                    <img className='z-5' src="https://dt-puresip.myshopify.com/cdn/shop/files/home_3_banner_3.jpg?v=1691478050&width=1500" alt="" />
                    <div className='absolute inset-y-12 inset-x-5 z-50 '>
                        <h4 className=' text-[20px] font-medium '>GET 30% OFFERS ON</h4>
                        <h4 className=' text-[25px] font-bold'>Milk Shakes</h4>
                        <button className='rounded-md bg-lime-500 z-50 text-white font-medium mt-6 w-[160px] h-[40px]'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='m-8 mt-16'>
                <h1 className='m-5 mb-0 flex justify-center font-bold text-[40px]'>Our Favorite Delicious Juice</h1>
                <p className='mb-2 mt-2 flex justify-center font-medium text-[15px]'> Neque Ornare Aenean Euismod Elementum Nisi. Nulla Porttitor Massa Id Neque Aliquam. Eros In Cursus Turpis Massa Tincidunt.</p>
                <div className='grid grid-cols-4 gap-2 p-2 pt-0'>
                    <div className='flex flex-col items-center p-4'>
                        <img className='' src="https://dt-puresip.myshopify.com/cdn/shop/files/3a.jpg?v=1691752809&width=360" alt="" />
                        <h1 className='font-medium text-[18px]'>Fresh Pineapple Goodness</h1>
                    </div>
                    <div className='flex flex-col items-center p-4 rounded-lg'>
                        <img className='' src="https://dt-puresip.myshopify.com/cdn/shop/files/2a.jpg?v=1691752784&width=360" alt="" />
                        <h1 className='font-medium text-[18px]'>Black Raspberry Sparkler</h1>
                    </div>
                    <div className='flex flex-col items-center p-4'>
                        <img className='' src="https://dt-puresip.myshopify.com/cdn/shop/files/prod3_1.jpg?v=1691400663&width=360" alt="" />
                        <h1 className='font-medium text-[18px]'>Kickstart Pierias Kiwi</h1>
                    </div>
                    <div className='flex flex-col items-center p-4'>
                        <img className='' src="https://dt-puresip.myshopify.com/cdn/shop/files/pro1.jpg?v=1691400596&width=1946" alt="" />
                        <h1 className='font-medium text-[18px]'>Strawberry & Mint Magic</h1>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-9 m-8 mt-0'>
                <div className=''><img className='' src="https://dt-puresip.myshopify.com/cdn/shop/files/home-3-image-1.jpg?v=1691743967&width=750" alt="" /></div>
                <div className='flex flex-col items-start justify-center p-10 '>
                    <h1 className='font-bold text-[40px]'>A Taste Of Freshness With Fresh Delicious Juices</h1>
                    <p className='font-medium mt-5 mb-5 text-slate-500'>Proin fermentum leo vel orci porta. Nam laoreet elit ut porttitor rhoncus. nisi, et interdum dolor mattis vitae. Aliquam gravida vitae nisl ut dignissim. Done ullamcorper nec, rhoncus ut enim.</p>
                    <button className='bg-black w-[150px] h-[50px] text-white font-medium mt-2'>Read more</button>
                </div>
            </div>
            <div className='flex flex-col items-center text-center justify-center m-9'>
                <h1 className='font-bold text-[35px]'>High Standard Quality And Taste</h1>
                <p className='w-[800px] m-2'>Eu Turpis Egestas Pretium Aenean Pharetra Magna. Faucibus Et Molestie Ac Feugiat. Massa Massa Ultricies Mi Quis Hendrerit. Tempor Orci Eu Lobortis Elementum. Sit Amet Consectetur Adipiscing Elit Pellentesque.</p>
            </div>
            <div className="m-9 flex flex-row justify-between text-center text-black h-[200px]">
                <div className='w-[400px] p-5 flex flex-col items-center justify-center justify-center'>
                    <img className='' src="https://dt-puresip.myshopify.com/cdn/shop/files/home-3-icon-2.png?v=1691743996&width=275" alt="" />
                    <h1 className='font-bold text-[20px] p-2'>Fresh Fruits</h1>
                    <p className=''>Blandit turpis cursus in hac habitasse platea dictumst quisque. Vel fringilla est ullamcorper eget.</p>
                </div>
                <div className='w-[400px] p-5 flex flex-col items-center justify-center'>
                    <img src="https://dt-puresip.myshopify.com/cdn/shop/files/home-3-icon-3.png?v=1691743999&width=275" alt="" />
                    <h1 className='font-bold text-[20px] p-2'>100% Organic</h1>
                    <p>Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Eu volutpat odio facilisis mauris sit amet massa.</p>
                </div>
                <div className='w-[400px] p-5 flex flex-col items-center justify-center'>
                    <img className='' src="https://dt-puresip.myshopify.com/cdn/shop/files/home-3-icon-1.png?v=1691743992&width=275" alt="" />
                    <h1 className='font-bold text-[20px] p-2'>Zero Calories</h1>
                    <p className=''>Aliquam id diam maecenas ultricies mi eget mauris pharetra. Auctor urna nunc id cursus metus aliquam eleifend.</p>
                </div>
            </div>
            <div className='m-8 mt-0 grid grid-cols-2 gap-6'>
                <div className='relative'>
                    <img src="https://dt-puresip.myshopify.com/cdn/shop/files/home-image-1_52513dc5-804b-44f7-8fe4-7bee79a0f885.jpg?v=1691741299" alt="" />
                    <div className='absolute inset-0 bg-white opacity-60 z-10' />
                </div>
                <div className=''>
                    <div className='grid grid-rows-2 gap-6'>
                        <div className='relative'>
                            <img src="https://dt-puresip.myshopify.com/cdn/shop/files/home-image-2.jpg?v=1691741323&width=1500" alt="" />
                            <div className='absolute inset-0 bg-white opacity-60 z-10' />
                        </div>
                        <div className='relative'>
                            <img className='' src="https://dt-puresip.myshopify.com/cdn/shop/files/home-image-3.jpg?v=1691741326&width=1500" alt="" />
                            <div className='absolute inset-0 bg-white opacity-60 z-10' />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};
export default Home;