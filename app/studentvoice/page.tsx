'use client'


import { Attribution, Send, Lock } from '@mui/icons-material'
import { motion } from 'framer-motion'


const cards = [
    {
        title: 'Social media post',
        subtitle: 'Created on May 21',
        bodyTitle: "I’m committing to No-Buy 2025 — I was tired of spending mindlessly",
        body: "If you’ve ever felt like shopping was just a reflex, this challenge might be for you. No more late-night cart-filling. Just intentional choices, one day at a time. Who’s in with me?",
        tag: 'smart consumption.',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Pinned thought',
        subtitle: 'Reflection',
    },
]
function page() {

    return (
        <div className=" lg:max-w-[70%] mx-auto overflow-scroll ">
            <div className="bg-white rounded-2xl sm:p-6 p-4 mb-6">
                <h2 className="text-2xl font-bold mb-4">Student voice </h2>

                {/* Add Input */}
                <div className="flex px-4 py-3 gap-4 border-t border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <Attribution />
                    </div>

                    <input
                        type="text"
                        placeholder="Speak your mind..."
                        className="flex-1 outline-none bg-gray-200 rounded-lg py-2 px-4 min-w-5"
                    />

                    <button className="text-white bg-[#1B7339] py-2 px-4 rounded-lg">
                        <Send />
                    </button>
                </div>

            </div>

            {/* Card Stack */}
            <div className=" bg-pink-100 flex items-center justify-center px-4 min-h-[90vh]">
                <div className="w-full max-w-md">
                    {/* Card Stack */}
                    <div className="relative w-full h-105">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: index * 18, scale: 1 - index * 0.05 }}
                                animate={{ y: index * 18, scale: 1 - index * 0.05 }}
                                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                                className="absolute inset-0 bg-white rounded-3xl p-6 shadow-xl overflow-y-auto"
                                style={{ zIndex: cards.length - index }}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900">{card.title}</p>
                                        <p className="text-xs text-gray-400">{card.subtitle}</p>
                                    </div>
                                    <Lock className="text-gray-400" fontSize="small" />
                                </div>


                                {/* Main Content (only for top card) */}
                                {index === 0 && (
                                    <>
                                        <h3 className="text-lg font-semibold leading-snug mb-3">
                                            {card.bodyTitle}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                            {card.body}
                                        </p>


                                        <div className="bg-gray-100 rounded-xl p-4 text-center text-pink-600 font-semibold">
                                            {card.tag}
                                        </div>


                                        <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-xl">
                                            +
                                        </button>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
