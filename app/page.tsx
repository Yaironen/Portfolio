import Image from 'next/image'
import Link from 'next/link'

// Build version: 1.0.1
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBFE] dark:bg-[#1C1B1F] transition-colors">
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto">
          {/* Card with M3 elevation and surface tint */}
          <div className="bg-white dark:bg-[#2B2930] rounded-[28px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#CAC4D0] dark:border-[#938F99]">
            {/* Image container with M3 shape scale */}
            <div className="relative w-72 h-72 mx-auto mb-8 rounded-[16px] overflow-hidden">
              <Image
                src="/images/LsjSfqCs_400x400.jpg"
                alt="Yair Ronen Illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Typography following M3 scale */}
            <h1 className="text-[#1C1B1F] dark:text-[#E6E1E5] text-display-medium font-normal text-4xl md:text-5xl mb-4 text-center">
              Yair Ronen
            </h1>
            <p className="text-[#49454F] dark:text-[#CAC4D0] text-body-large mb-8 text-center text-lg">
              Portfolio placeholder
            </p>
            
            {/* M3 Button styles */}
            <div className="flex justify-center">
              <Link 
                href="https://www.linkedin.com/in/yairronen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6750A4] hover:bg-[#7C6EBF] active:bg-[#735FC7] text-[#FFFFFF] text-label-large font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                View My LinkedIn Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
