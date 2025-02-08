import Image from "next/image"

export default function LetsConnect() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 p-6 md:p-8 bg-gradient-to-br from-soft-cotton-candy via-pink-200 to-soft-cotton-candy-light">
      <h1 className="font-dancing-script text-4xl md:text-6xl font-bold mb-8 text-center text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
        Hey, lovely!
      </h1>
      <Image src="/cat-letter.gif" alt="Cute cat sending a letter" width={300} height={300} className="mb-8" />
      <h2 className="font-parisienne text-4xl md:text-5xl mb-6 text-center text-romantic-blush">Let&apos;s Connect</h2>
      <div className="font-nunito text-lg md:text-xl space-y-4 max-w-2xl text-center">
        <p>If this resonates with you, and you feel we could share something meaningful, let&apos;s talk!</p>
        <p>
          I don&apos;t have any demands—just seeking a soul to support through good and bad days. Let&apos;s explore life&apos;s
          adventures with love and empathy.
        </p>
      </div>
      <div className="mt-10 space-y-4 w-full max-w-md">
        <a
          href="https://t.me/Wizardiandev"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95 text-center"
        >
          📩 Connect on Telegram
        </a>
        <a
          href="https://www.instagram.com/restful_rebel/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          🌸 Follow on Instagram
        </a>
      </div>
      <div className="mt-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Share a tune that makes your heart skip a beat 🎶"
          className="w-full px-6 py-3 rounded-full border-2 border-pink-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 placeholder:text-gray-400"
        />
      </div>
    </div>
  )
}

