import Image from "next/image"

export default function ValentineAsk({ onYes, onChat }: { onYes: () => void; onChat: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 bg-gradient-to-br from-romantic-blush to-romantic-blush-light">
      <Image src="/nervous-character.gif" alt="Nervous character" width={300} height={300} className="mb-8" />
      <h2 className="font-dancing-script text-4xl md:text-5xl font-bold mb-6 text-center text-yellow-300 drop-shadow-lg">The Valentine Ask</h2>
      <div className="font-nunito text-lg md:text-xl space-y-4 max-w-2xl text-center">
        <p>Here&apos;s my question:</p>
        <p>Would you give us a chance to turn this moment into something special… maybe even be my Valentine? 💘</p>
      </div>
      <div className="mt-8 space-x-4">
        <button 
          onClick={onYes}
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Yes, let&apos;s try! 🌟
        </button>
        <button 
          onClick={onChat}
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Let&apos;s chat first 💬
        </button>
      </div>
    </div>
  )
}

