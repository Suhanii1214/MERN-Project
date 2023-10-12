import React from 'react'

export const CreateListing = () => {
  return (
    <main className='p-3 max-w-4xl mx-auto mb-6'>
        <h1 className='text-3xl font-bold text-center my-7'>Create a Listing</h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col flex-1 gap-4'>
                <input 
                type='text'
                className='border border-gray-300 p-3 rounded-lg'
                placeholder='Name'
                id='name'
                maxLength='62'
                minLength='10'
                required    
                />
                <textarea 
                type='text'
                className='border border-gray-300 p-3 rounded-lg'
                placeholder='Description'
                id='description'
                required    
                />
                <input 
                type='text'
                className='border border-gray-300 p-3 rounded-lg'
                placeholder='Address'
                id='address'
                required    
                />
                <div className='flex flex-row gap-6 flex-wrap'>
                    <div className='flex gap-2'>
                        <input type='chexkbox' id='sale' className='w-5 border'/>
                        <span>Sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='chexkbox' id='rent' className='w-5 border'/>
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='chexkbox' id='parking' className='w-5 border'/>
                        <span>Parking Spot</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='chexkbox' id='furnished' className='w-5 border'/>
                        <span>Furnished</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='chexkbox' id='offer' className='w-5 border'/>
                        <span>Offer</span>
                    </div>
                </div>
                <div className='flex flex-wrap gap-6'>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='bedrooms' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                        <p>Beds</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='bathrooms' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                        <p>Baths</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='regularPrice' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                        <div className='flex flex-col items-center'>
                            <p>Regular Price</p>
                            <span className='text-xs'>($ / month)</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='discountPrice' min='1' max='10' required className='p-3 border border-gray-300 rounded-lg'/>
                        <div className='flex flex-col items-center'>
                            <p>Discount Price</p>
                            <span className='text-xs'>($ / month)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Images:
                    <span className='font-normal text-gray-600 ml-2'>The first image will be the cover (max 6)</span>
                </p>
                <div className='flex gap-4'>
                    <input className='p-3 border border-gray-300 rounded w-full' type='file' id='images' accept='image/*' multiple/>
                    <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
                </div>
                <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
            </div>
        </form>
    </main>
  )
}