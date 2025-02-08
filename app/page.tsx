"use client"

import { useState } from "react"
import WarmWelcome from "./components/WarmWelcome"
import WhatISeek from "./components/WhatISeek"
import ValentineQuestion from "./components/ValentineQuestion"
import LetsConnect from "./components/LetsConnect"
import FloatingHearts from "./components/FloatingHearts"

export default function Home() {
  const [page, setPage] = useState(1)

  return (
    <main className="relative">
      <FloatingHearts />
      <div className="relative z-10">
        {page === 1 && <WarmWelcome onNext={() => setPage(2)} />}
        {page === 2 && <WhatISeek onNext={() => setPage(3)} />}
        {page === 3 && <ValentineQuestion onYes={() => setPage(4)} />}
        {page === 4 && <LetsConnect />}
      </div>
    </main>
  )
}

