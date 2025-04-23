import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-80 h-80 mx-auto mb-8 relative rounded-lg overflow-hidden">
            <Image
              src="/images/LsjSfqCs_400x400.jpg"
              alt="Yair Ronen Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          This is Yair Ronen portfolio placeholder
        </h1>
        <Link 
          href="https://www.linkedin.com/in/yairronen/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View My LinkedIn Portfolio
        </Link>
      </div>
    </main>
  )
}
