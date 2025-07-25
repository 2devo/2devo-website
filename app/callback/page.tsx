"use client"

import { useEffect } from "react"

export default function CallbackPage() {
  useEffect(() => {
    // Tally form'a yönlendirme
    window.location.href = "https://tally.so/"
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-8"></div>
        <h1 className="text-2xl font-bold text-white mb-4">Geri arama formumuza yönlendiriliyorsunuz...</h1>
        <p className="text-slate-400">
          Eğer otomatik yönlendirme çalışmazsa,
          <a href="https://tally.so/" className="text-blue-400 hover:text-blue-300 ml-1">
            buraya tıklayın
          </a>
        </p>
      </div>
    </div>
  )
}
