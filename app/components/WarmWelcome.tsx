import Image from "next/image"

export default function WarmWelcome({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6 md:p-8 bg-gradient-to-br from-warm-peach via-pink-400 to-warm-pink">
      <Image src="/buona-notte.gif" alt="Blushing kitten waving" width={200} height={200} className="mb-8 rounded-lg shadow-xl" />
      <h1 className="font-dancing-script text-4xl md:text-6xl font-bold mb-8 text-center text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
        Hey, lovely!
      </h1>
      <div className="font-quicksand text-lg md:text-xl space-y-6 max-w-2xl text-center tracking-wide">
        <p>I truly appreciate you taking the time to be here.</p>
        <p>
          I believe true connections aren&apos;t built on looks or grand gestures but on
          <span className="font-bold"> trust, empathy, and shared moments</span>.
        </p>
        <p>If you&apos;re open to exploring life together, let&apos;s take this journey one step at a time.</p>
      </div>
      <button
        onClick={onNext}
        className="mt-12 bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95"
      >
        Next →
      </button>
    </div>
  )
}

