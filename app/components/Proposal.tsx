"use client"

import Image from "next/image"
import { useState } from "react"
import confetti from "canvas-confetti"

export default function Proposal({ onYes }: { onYes: () => void }) {
  const [noCount, setNoCount] = useState(0)
  const [noButtonStyle, setNoButtonStyle] = useState({})

  const handleNo = () => {
    setNoCount(noCount + 1)
    setNoButtonStyle({
      transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`,
      transition: "all 0.3s ease",
    })
  }

  const handleYes = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
    onYes()
  }

  const noMessages = [
    "Are you sure?",
    "Pretty please?",
    "Don't break my heart!",
    "Give it another thought!",
    "You're making the dinosaur sad!",
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 bg-gradient-to-br from-romantic-blush to-romantic-blush-light">
      <Image 
        src="/dinosaur-proposal.gif" 
        alt="Dinosaur proposal" 
        width={300} 
        height={300} 
        className="mb-8"
      />
      <h2 className="font-dancing-script text-4xl md:text-5xl font-bold mb-6 text-center text-yellow-300 drop-shadow-lg">
        Even dinosaurs need love... Will you be my Valentine?
      </h2>
      <div className="space-x-4">
        <button 
          onClick={handleYes}
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Yes, I&apos;d love to! 💖
        </button>
        <button 
          onClick={handleNo}
          style={noButtonStyle}
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          {noCount < noMessages.length ? noMessages[noCount] : "Okay, I&apos;ll stop asking..."}
        </button>
      </div>
    </div>
  )
}

