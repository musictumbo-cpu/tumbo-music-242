export default function EPKPage() {
  return (
    <div className="pt-24 pb-16 max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-gold text-xs uppercase tracking-widest mb-2">Electronic Press Kit</p>
        <h1 className="font-display text-4xl font-bold text-white">Tumbo Music 242</h1>
        <p className="text-gray-400 mt-2">Independent Artist — Nassau, Bahamas</p>
        <p className="text-gray-500 text-sm mt-1">musictumbo@gmail.com</p>
      </div>
      <div className="space-y-4 mb-12">
        <h2 className="font-display text-xl text-gold font-bold border-b border-gray-800 pb-2">Discography</h2>
        <div className="bg-gray-900 border border-gray-800 rounded p-5">
          <div className="flex items-center gap-3">
            <h3 className="text-white font-bold">Nassau Girls the Sweetest</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-900 text-yellow-400">Released</span>
          </div>
          <p className="text-gray-400 text-sm mt-1">A love letter to Bahamian women — celebrating their beauty, strength, and island spirit.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded p-5">
          <div className="flex items-center gap-3">
            <h3 className="text-white font-bold">She Bumped Into Me</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-900 text-yellow-400">Released</span>
          </div>
          <p className="text-gray-400 text-sm mt-1">A smooth R&B story about an unexpected encounter. Warm Nassau vibes with real emotion.</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded p-5">
          <div className="flex items-center gap-3">
            <h3 className="text-white font-bold">Poor and Proud</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-400">Coming Soon</span>
          </div>
          <p className="text-gray-400 text-sm mt-1">A bold anthem for anyone who built something from nothing. Music video in production.</p>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="font-display text-xl text-gold font-bold border-b border-gray-800 pb-2 mb-4">Contact</h2>
        <p className="text-gray-300 text-sm">Email: musictumbo@gmail.com</p>
        <p className="text-gray-300 text-sm mt-1">Location: Nassau, Bahamas</p>
      </div>
    </div>
  )
}