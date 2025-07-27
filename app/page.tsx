import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-light text-black">
              Jacoot
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600">
                Home
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-gray-600">
                Contact
              </Link>
              <Link href="/services" className="text-gray-900 hover:text-gray-600">
                Services
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Welcome to Jacoot</h1>
          <h2 className="text-2xl font-light text-gray-600 mb-12">You Talk. I Listen</h2>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-light text-gray-900 mb-6">Story</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="italic text-center text-lg">
                "Give someone a fish and they'll eat for a day. Teach someone to fish and they'll eat for a lifetime."
              </p>
              <p>
                This proverb lies at the foundation of Jacoot. Encompassing a holistic perspective, addressing the
                mental and physical aspects of wellbeing, Jacoot is here to help those who seek it.
              </p>
              <p>
                Jacoot is a social enterprise helping those in need, providing an anonymous and non-clinical service for
                engaging in conversations, giving support, and exploring strategies for improving mental and physical
                fitness.
              </p>
            </div>
          </section>

          <div className="text-center">
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Get in Touch
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
