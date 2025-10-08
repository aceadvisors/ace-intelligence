import Benefit from "@/components/benefit";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";

import { FaChartLine, FaBrain, FaVectorSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-foreground flex flex-col">
      {/* comment */}
      <Head>
        <title>ACE Intelligence</title>
        <meta name="description" content=" Transforming African Markets with AI" />
      </Head>
      <main className="flex flex-col items-center text-center space-y-6 flex-grow px-4 mb-10">
        <HeroSection />
        
        <section className="bg-white py-20 px-6" id="features">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What can you do with <span className="text-green-900">ACE Intelligence</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Unlock the power of data-driven decision-making with tools tailored for Africa&apos;s growing markets.
            </p>

            <div className="grid gap-10 md:grid-cols-3">
              {/* Benchmarking */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition">
                <div className="w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-900 font-bold text-xl">
                  <FaVectorSquare size={32}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Benchmarking</h3>
                <p className="text-gray-600 text-sm">
                  Access over 40,000 local and international companies to benchmark your business performance with confidence.
                </p>
              </div>

              {/* Valuation */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition">
                <div className="w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-900 font-bold text-xl">
                  <FaChartLine size={32}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Valuation</h3>
                <p className="text-gray-600 text-sm">
                  Instantly generate valuation reports with accurate, market-aligned pricing and detailed analytics.
                </p>
              </div>

              {/* Market Analysis */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition">
                <div className="w-16 h-16 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-900 font-bold text-xl">
                  <FaBrain size={32}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Market Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Identify market leaders, discover new trends, and analyze your position in any industry with real-time insights.
                </p>
              </div>
            </div>
          </div>
        </section>
    
       

        <Benefit />
        
      </main>

      
    </div>
  );
}
