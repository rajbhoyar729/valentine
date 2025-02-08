import Image from "next/image"

export default function WhatISeek({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6 md:p-8 bg-gradient-to-br from-mauve via-pink-400 to-coral">
      <Image src="/ifB1v1W3Db0GIW7uTA.gif" alt="Bunny sitting under a tree" width={300} height={300} className="mb-8 rounded-lg shadow-xl" />
      <h1 className="font-dancing-script text-4xl md:text-6xl font-bold mb-8 text-center text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
        Hey, lovely!
      </h1>
      <div className="font-nunito text-lg md:text-xl space-y-6 max-w-2xl text-center leading-relaxed">
        <p className="font-poppins text-2xl md:text-3xl italic font-bold mb-8 text-center text-rose-gold drop-shadow-sm">
          I just seek a soul
        </p>
        <p>I don&apos;t have any demands. No conditions.</p>
        <p>
          Someone with whom I can share my spare time, support in their struggles, and be their silent cheerleader on
          the path to their dreams.
        </p>
        <p>
          Life is full of good and bad days. I want to share them all with someone special—giving love, kindness, and
          all the empathy I have.
        </p>
      </div>
      <button
        onClick={onNext}
        className="mt-12 bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 animate-pulse"
      >
        Next →
      </button>
    </div>
  )
}

