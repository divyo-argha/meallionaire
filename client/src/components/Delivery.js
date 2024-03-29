import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500  font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p>
                  Indulge in a symphony of flavors with our food ordering haven. 
                  Savor the convenience of a click, as we bring a feast to your doorstep. 
                  From savory bites to sweet delights, our menu is a culinary journey crafted just for you. 
                  Every dish is a masterpiece, prepared with passion and perfection. 
                  Elevate your dining experience with us – where every order is a celebration of taste, and every bite tells a story. 
                  Unleash your cravings, and let the feast begin. 
                  Your satisfaction, our mission – because great meals make lasting memories.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery