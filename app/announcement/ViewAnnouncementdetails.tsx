import React from 'react'
import { ArrowOutward, Attribution, Send, Share } from '@mui/icons-material'

function ViewAnnouncementdetails() {
    return (
        <div className="w-full  mx-auto sm:mb-0 mb-20">

            {/* Announcement Card */}
            <div className="bg-white rounded-2xl relative">
                <button className="absolute top-5 right-5">
                    <Share fontSize="small" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 p-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                        <p className="font-semibold text-sm">Dr. Richard James</p>
                        <p className="text-xs text-gray-500">Aug 12, 2026 · 6:40 PM</p>
                    </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-3 text-sm text-gray-800">
                    The digestive system includes the mouth, pharynx (throat), esophagus,
                    stomach, small intestine, large intestine, rectum, and anus.
                </div>

                {/* Image */}
                <div className="overflow-hidden w-[95%] mx-auto h-64 bg-gray-200 rounded-2xl">
                    <img
                        src="https://assets-static.invideo.io/images/large/103_Instagram_Post_Ideas_8_8a54dd5a86.png"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Comments Header */}
                <div className="flex items-center justify-between mx-4 py-3 border-b text-sm text-gray-600">
                    <p className="font-semibold">Comments</p>
                    <p className="text-xs text-gray-500">
                        8 comments <ArrowOutward fontSize="small" />
                    </p>
                </div>

                {/* Scrollable Comments */}
                <div className="max-h-72 overflow-y-auto px-4 py-2 space-y-4">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                            <div className="bg-gray-100 rounded-xl px-4 py-2 text-sm">
                                <p className="font-semibold text-xs mb-1">
                                    User {i + 1}
                                </p>
                                <p className="text-gray-700">
                                    This is a dummy comment for the announcement details view.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comment Input */}
                <div className="flex px-4 py-3 gap-4 border-t">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <Attribution />
                    </div>

                    <input
                        type="text"
                        placeholder="Drop a comment..."
                        className="flex-1 outline-none bg-gray-200 rounded-lg py-2 px-4"
                    />

                    <button className="text-white bg-[#1B7339] py-2 px-4 rounded-lg">
                        <Send />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewAnnouncementdetails
