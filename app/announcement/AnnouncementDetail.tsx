import { ArrowOutward, Attribution, Send, Share } from '@mui/icons-material'
import React from 'react'

function AnnouncementDetail() {
    return (
        <div className="AnnouncementDetail flex flex-col gap-8 justify-center sm:mb-0 mb-22">
            <div className="w-full  bg-white rounded-2xl relative">
                <button className='absolute top-5 right-5'><Share fontSize='small' /></button>
                {/* Header  */}
                <div className="flex items-center gap-3 p-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                        <p className="font-semibold text-sm">Dr. Richard James</p>
                        <p className="text-xs text-gray-500">Aug 12, 2026 · 6:40 PM</p>
                    </div>
                </div>

                {/* Content  */}
                <div className="px-4 pb-3 text-sm text-gray-800">
                    The digestive system includes the mouth, pharynx (throat), esophagus,
                    stomach, small intestine, large intestine, rectum, and anus.
                </div>

                {/* Image  */}
                <div className=" overflow-hidden w-[95%] mx-auto h-64 bg-gray-200 flex items-center justify-center rounded-2xl">
                    <img src="https://assets-static.invideo.io/images/large/103_Instagram_Post_Ideas_8_8a54dd5a86.png" alt="" className='w-full h-full object-cover' />
                </div>

                {/* Actions  */}
                <div className="flex items-center justify-between  mx-4 py-2 border-b border-gray-200 text-sm text-gray-600 b sm:gap-8 gap-4">
                    <p className="font-semibold text-sm">Comments</p>
                    <p className="text-xs text-gray-500">8 comments <span className=' cursor-pointer'><ArrowOutward fontSize='small' /></span></p>

                </div>
                {/* Actions  */}
                <div className="flex  px-4 py-3 text-sm text-gray-600 b sm:gap-8 gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><Attribution /></div>
                    <input type="text" placeholder='Drop a comment...' className='flex flex-1 outline-none  bg-gray-200 rounded-lg py-2 px-4' />  <button className=' text-white bg-[#1B7339] py-2 px-4 rounded-lg cursor-pointer'><Send /></button>

                </div>

            </div>
            <div className="w-full  bg-white rounded-2xl relative">
                <button className='absolute top-5 right-5'><Share fontSize='small' /></button>
                {/* Header  */}
                <div className="flex items-center gap-3 p-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                        <p className="font-semibold text-sm">Dr. Richard James</p>
                        <p className="text-xs text-gray-500">Aug 12, 2026 · 6:40 PM</p>
                    </div>
                </div>

                {/* Content  */}
                <div className="px-4 pb-3 text-sm text-gray-800">
                    The digestive system includes the mouth, pharynx (throat), esophagus,
                    stomach, small intestine, large intestine, rectum, and anus.
                </div>

                {/* Image  */}
                <div className=" overflow-hidden w-[95%] mx-auto h-64 bg-gray-200 flex items-center justify-center rounded-2xl">
                    <img src="https://assets-static.invideo.io/images/large/103_Instagram_Post_Ideas_8_8a54dd5a86.png" alt="" className='w-full h-full object-cover' />
                </div>

                {/* Actions  */}
                <div className="flex items-center justify-between  mx-4 py-2 border-b border-gray-200 text-sm text-gray-600 b sm:gap-8 gap-4">
                    <p className="font-semibold text-sm">Comments</p>
                    <p className="text-xs text-gray-500">8 comments <span className=' cursor-pointer'><ArrowOutward fontSize='small' /></span></p>

                </div>
                {/* Actions  */}
                <div className="flex  px-4 py-3 text-sm text-gray-600 b sm:gap-8 gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><Attribution /></div>
                    <input type="text" placeholder='Drop a comment...' className='flex flex-1 outline-none  bg-gray-200 rounded-lg py-2 px-4' />  <button className=' text-white bg-[#1B7339] py-2 px-4 rounded-lg cursor-pointer'><Send /></button>

                </div>

            </div>
            <div className="w-full  bg-white rounded-2xl ">

                {/* Header  */}
                <div className="flex items-center gap-3 p-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                        <p className="font-semibold text-sm">Dr. Richard James</p>
                        <p className="text-xs text-gray-500">Aug 12, 2026 · 6:40 PM</p>
                    </div>
                </div>

                {/* Content  */}
                <div className="px-4 pb-3 text-sm text-gray-800">
                    The digestive system includes the mouth, pharynx (throat), esophagus,
                    stomach, small intestine, large intestine, rectum, and anus.
                </div>

                {/* Image  */}
                <div className=" overflow-hidden w-[95%] mx-auto h-64 bg-gray-200 flex items-center justify-center rounded-2xl">
                    <img src="https://assets-static.invideo.io/images/large/103_Instagram_Post_Ideas_8_8a54dd5a86.png" alt="" className='w-full h-full object-cover' />
                </div>

                {/* Actions  */}
                <div className="flex items-center justify-between  mx-4 py-2 border-b border-gray-200 text-sm text-gray-600 b sm:gap-8 gap-4">
                    <p className="font-semibold text-sm">Comments</p>
                    <p className="text-xs text-gray-500">8 comments <span className=' cursor-pointer'><ArrowOutward fontSize='small' /></span></p>

                </div>
                {/* Actions  */}
                <div className="flex  px-4 py-3 text-sm text-gray-600 b sm:gap-8 gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><Attribution /></div>
                    <input type="text" placeholder='Drop a comment...' className='flex flex-1 outline-none  bg-gray-200 rounded-lg py-2 px-4' />  <button className=' text-white bg-[#1B7339] py-2 px-4 rounded-lg cursor-pointer'><Send /></button>

                </div>

            </div>

        </div>

    )
}

export default AnnouncementDetail