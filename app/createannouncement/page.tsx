'use client'

import React, { useState } from 'react'
import toast from 'react-hot-toast'

function AnnouncementsPage() {
    const [name, setName] = useState('')
    const [announcement, setAnnouncement] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name || !announcement || !imageUrl) {
            toast.error('Please fill in all fields.')
            return
        }

        const formData = {
            name,
            announcement,
            imageUrl,
            createdAt: new Date(),
        }

        setLoading(true)

        // Simulate API / Firestore submission
        setTimeout(() => {
            console.log('Announcement submitted:', formData)
            toast.success('Announcement added successfully!')
            setName('')
            setAnnouncement('')
            setImageUrl('')
            setLoading(false)
        }, 1000)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg flex flex-col gap-6"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    Add Announcement
                </h2>

                {/* Name */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B7339]"
                    />
                </div>

                {/* Announcement */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="announcement" className="font-medium text-gray-700">
                        Announcement
                    </label>
                    <textarea
                        id="announcement"
                        placeholder="Type your announcement..."
                        value={announcement}
                        onChange={(e) => setAnnouncement(e.target.value)}
                        className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B7339] resize-none"
                        rows={4}
                    />
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="imageUrl" className="font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        id="imageUrl"
                        type="text"
                        placeholder="Paste image URL here"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B7339]"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#1B7339] hover:bg-[#14532d] text-white font-medium py-2 rounded-xl transition-all duration-200 disabled:opacity-50"
                >
                    {loading ? 'Submitting...' : 'Add Announcement'}
                </button>
            </form>
        </div>
    )
}

export default AnnouncementsPage
