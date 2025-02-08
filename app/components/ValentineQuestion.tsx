"use client"

import Image from "next/image"
import { useState } from "react"
import confetti from "canvas-confetti"

const savageResponses = [
  "Better luck next time",
  "Ouch! That's cold!",
  "Playing hard to get, huh?",
  "My heart just skipped a beat... backwards!",
  "Is it hot in here, or is that just my burning rejection?",
]

export default function ValentineQuestion({ onYes }: { onYes: () => void }) {
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

  if (noCount > 2) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 bg-gradient-radial from-romantic-blush to-romantic-blush-light">
        <h1 className="font-dancing-script text-4xl md:text-5xl font-bold mb-6 text-center text-yellow-300 drop-shadow-lg">
          Nice meeting you!
        </h1>
        <p className="font-nunito text-lg md:text-xl max-w-2xl text-center mb-8">
          If you change your mind in the future, I&apos;ll be here as a friend.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Start Over
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 bg-gradient-radial from-romantic-blush to-romantic-blush-light">
      <div className="relative mb-8">
        <Image
          src="/puppy-heart.gif"
          alt="Fluffy puppy holding a heart"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
        <h1 className="absolute bottom-4 left-0 right-0 font-dancing-script text-4xl md:text-5xl font-bold text-center text-yellow-300 drop-shadow-lg">
          Will you be my Valentine?
        </h1>
      </div>
      <p className="font-nunito text-lg md:text-xl max-w-2xl text-center mb-8">
        Will you take a chance while spending some valuable time with me for exploring each other and looking for a
        brighter future?
      </p>
      <div className="space-x-4">
        <button
          onClick={handleYes}
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Yes! Let&apos;s Begin 💘
        </button>
        <button
          onClick={handleNo}
          style={noButtonStyle}
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          {savageResponses[noCount]}
        </button>
      </div>
    </div>
  )
}

