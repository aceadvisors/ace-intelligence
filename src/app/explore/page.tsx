"use client";

import { FaLightbulb, FaChartLine, FaBalanceScale, FaRocket, FaFileAlt, FaChartBar, FaCalculator, FaCogs, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function Explore() {
  return (
    <main className="flex-1 pt-32 pb-12 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Understanding <span className="text-green-900">Business Valuation</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Business valuation is the process of determining how much a company is worth.
          It helps business owners, investors, and analysts understand the economic value of a business — whether for raising capital, mergers and acquisitions, investment decisions, partnership buyouts, or compliance and reporting.
        </p>
        <div className="p-6 bg-white/40 backdrop-blur-md rounded-xl border border-white/60 shadow-lg">
          <p className="text-xl font-semibold text-gray-800">
            💡 What is my business really worth today?
          </p>
        </div>
      </section>

      {/* Why Valuation Matters */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Business Valuation <span className="text-green-900">Matters</span>
          </h2>
          <p className="text-lg text-gray-600">A reliable valuation helps you:</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/60 hover:bg-white/70 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-900">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valuation Methods */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Common <span className="text-green-900">Valuation Methods</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            There are different ways to value a business, each suitable for specific contexts. The most widely used methods are:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {/* DCF Method */}
          <div className="bg-gradient-to-br from-green-900/10 to-green-700/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-green-900 flex items-center justify-center text-white shadow-lg">
                <FaCalculator size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Intrinsic Valuation (DCF)</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This approach estimates the value of a business based on its <strong>future cash flows</strong>, discounted to today&apos;s value.
            </p>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg mb-4 border border-white/80">
              <p className="text-sm text-gray-700">
                <strong className="text-green-900">Best for:</strong> Businesses with predictable revenue streams, or when you want to know the true underlying worth of your company, independent of market noise.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <span>Forward-looking estimate</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <span>Ideal for asset-heavy businesses</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                <span>Requires good financial data</span>
              </li>
            </ul>
          </div>

          {/* Comparable Valuation */}
          <div className="bg-gradient-to-br from-blue-600/10 to-blue-400/5 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                <FaBalanceScale size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Comparable Valuation</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Also known as <strong>market-based valuation</strong>, this method compares your company with similar businesses in the same sector or region.
            </p>
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg mb-4 border border-white/80">
              <p className="text-sm text-gray-700">
                <strong className="text-blue-600">Best for:</strong> Startups or SMEs where market perception and industry benchmarks are key.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Market-driven insights</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Useful for benchmarking</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>Works with limited projections</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mb-12 text-center">
          <p className="text-sm text-gray-600 italic max-w-4xl mx-auto bg-gray-50/60 backdrop-blur-sm p-4 rounded-lg border border-gray-200/50">
            <strong>Note:</strong> Other methods — such as precedent transactions, asset-based, or earnings multiples — are also used globally, but ACE focuses on what&apos;s most practical and data-driven for emerging markets.
          </p>
        </div>

        {/* Choosing Right Approach */}
        <div className="bg-white/40 backdrop-blur-md p-8 rounded-xl border border-white/60 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choosing the Right Approach</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 backdrop-blur-sm p-6 rounded-lg border border-green-200/50">
              <p className="text-gray-700 mb-2 font-semibold text-lg">
                <span className="text-green-900">📊 Use DCF when:</span>
              </p>
              <p className="text-gray-600">
                You have an asset-heavy business and have access to good financial data and want a forward-looking estimate.
              </p>
            </div>
            <div className="bg-blue-50/50 backdrop-blur-sm p-6 rounded-lg border border-blue-200/50">
              <p className="text-gray-700 mb-2 font-semibold text-lg">
                <span className="text-blue-600">📈 Use Comparable Valuation when:</span>
              </p>
              <p className="text-gray-600">
                You want to benchmark yourself against the market or when financial projections are limited.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-lg font-semibold text-gray-800 bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/80">
            ACE Intelligence combines insights from <span className="text-green-900">both methods</span> to give you a balanced, realistic, and data-grounded valuation. ✨
          </p>
        </div>
      </section>

      {/* How ACE Makes It Easy - REDESIGNED WITH ALTERNATING LAYOUT */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How <span className="text-green-900">ACE Intelligence</span> Makes It Easy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Traditionally, business valuation requires high analytical efforts, building complex spreadsheets, and time.
            With ACE Intelligence, you can do it in <strong>minutes, not months</strong>.
          </p>
        </div>

        {/* Alternating Zig-Zag Timeline */}
        <div className="relative">
          {/* Center Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 via-green-600 to-green-900 opacity-20 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  {/* Desktop Layout - Alternating */}
                  <div className={`hidden lg:grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Left/Right Content */}
                    {isEven ? (
                      <>
                        {/* Content Left */}
                        <div className="text-right pr-8">
                          <div className="inline-block bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center justify-end gap-4 mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                                <p className="text-sm text-green-700 font-semibold mt-1">Step {index + 1}</p>
                              </div>
                              <div className="text-green-900 text-5xl flex-shrink-0">
                                {step.icon}
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                        {/* Spacer Right */}
                        <div></div>
                      </>
                    ) : (
                      <>
                        {/* Spacer Left */}
                        <div></div>
                        {/* Content Right */}
                        <div className="text-left pl-8">
                          <div className="inline-block bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="text-green-900 text-5xl flex-shrink-0">
                                {step.icon}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                                <p className="text-sm text-green-700 font-semibold mt-1">Step {index + 1}</p>
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Center Number Badge */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-white">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout - Simple Stack */}
                  <div className="lg:hidden">
                    <div className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/80">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="text-green-900 text-4xl flex-shrink-0">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                          <p className="text-xs text-green-700 font-semibold mt-1">Step {index + 1}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Box */}
        <div className="mt-20 bg-gradient-to-r from-green-100/60 to-blue-100/60 backdrop-blur-md p-8 rounded-2xl border border-white/60 shadow-xl text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🎯 All in One Platform
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From data input to final report, ACE streamlines the entire valuation process. No spreadsheets, no consultants, no complexity — just smart, AI-powered insights in minutes.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-green-900 to-green-700 p-12 rounded-2xl shadow-2xl text-white relative overflow-hidden">
          {/* Decorative Glassmorphic Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Value Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get started with ACE Intelligence today and unlock data-driven insights in minutes.
            </p>
            <Link href="/contact" className="inline-block bg-white text-green-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-2xl hover:-translate-y-1">
              Start Your Valuation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Benefits Data
const benefits = [
  {
    icon: <FaRocket size={24} />,
    title: "Raise investment on fair terms",
    description: "Present credible valuations to investors and secure funding with confidence.",
  },
  {
    icon: <FaBalanceScale size={24} />,
    title: "Negotiate equity stakes",
    description: "Make informed decisions when bringing in partners or selling equity.",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Track company growth",
    description: "Monitor your business value over time and measure performance improvements.",
  },
  {
    icon: <FaCogs size={24} />,
    title: "Plan strategic exits",
    description: "Prepare for acquisitions or exits with accurate market valuations.",
  },
  {
    icon: <FaFileAlt size={24} />,
    title: "Communicate value effectively",
    description: "Share professional reports with stakeholders and board members.",
  },
  {
    icon: <FaLightbulb size={24} />,
    title: "Make informed decisions",
    description: "Base your strategic choices on solid financial data and analysis.",
  },
];

// Steps Data
const steps = [
  {
    icon: <FaFileAlt size={48} />,
    title: "Input Your Business Data",
    description: "Simply enter your financial details — revenue, expenses, assets, and other key indicators.",
  },
  {
    icon: <FaBalanceScale size={48} />,
    title: "Select Valuation Type",
    description: "Choose between Intrinsic (DCF) or Comparable Valuation, based on your business profile.",
  },
  {
    icon: <FaCogs size={48} />,
    title: "AI-Powered Analysis",
    description: "Our system uses machine learning models trained on thousands of valuation cases and market data.",
  },
  {
    icon: <FaChartBar size={48} />,
    title: "Instant Valuation Report",
    description: "Get a professional valuation summary with key metrics, charts, and benchmarks.",
  },
  {
    icon: <FaCalculator size={48} />,
    title: "Refine and Compare",
    description: "Adjust assumptions, test scenarios, and compare different valuation outcomes.",
  },
];
