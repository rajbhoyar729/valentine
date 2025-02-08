import Image from "next/image"

export default function PostAcceptance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6 md:p-8 bg-gradient-to-br from-romantic-blush via-pink-400 to-romantic-blush-light">
      <Image src="/dinosaur-celebrate.gif" alt="Celebrating dinosaur" width={300} height={300} className="mb-8 rounded-lg shadow-xl" />
      <h2 className="font-dancing-script text-4xl md:text-6xl font-bold mb-8 text-center text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
        Rawr-some! Let&apos;s chat 💌
      </h2>
      <p className="font-nunito text-xl mb-8 text-center">Your dino-mite adventure starts here!</p>
      <form className="w-full max-w-md space-y-6">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full px-6 py-3 rounded-full border-2 border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 bg-white/95 text-gray-800 transition-all duration-300 placeholder:text-gray-400" 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full px-6 py-3 rounded-full border-2 border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 bg-white/95 text-gray-800 transition-all duration-300 placeholder:text-gray-400" 
        />
        <textarea 
          placeholder="Leave a message for your Valentine!" 
          className="w-full px-6 py-4 rounded-2xl border-2 border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 bg-white/95 text-gray-800 transition-all duration-300 placeholder:text-gray-400 resize-none"
          rows={4}
        ></textarea>
        <button 
          type="submit" 
          className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95"
        >
          Send Love 💕
        </button>
      </form>
    </div>
  )
}

