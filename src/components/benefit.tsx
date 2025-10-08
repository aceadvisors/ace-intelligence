"use client";

import React from "react";
import Image from "next/image";
import investment from "../images/investment.png";
import accelerator from "../images/accelerator.png"; 
import commercial from "../images/commercial.png";
import business from "../images/business.png";
import investors from "../images/investor.png";
import grant from "../images/grant.png";


const Benefit: React.FC = () => {
 
  return (
    <section className="bg-gray-50 py-20 px-6" id="benefits">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
      What can you benefit from <span className="text-green-900">ACE Intelligence</span>?
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      ACE Intelligence empowers different stakeholders through accurate, accessible, and local-context financial intelligence.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left justify-center">
      {/* Businesses */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <Image
            src={business}
            alt="investment"
            width={32} // mini size
            height={32}
            className="mb-2"
          />For Businesses</h3>
        <p className="text-gray-600 text-sm">
          To accurately assess their true market worth, enabling them to raise finance more effectively.
        </p>
      </div>

      {/* Investors */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <Image
            src={commercial}
            alt="investment"
            width={32} // mini size
            height={32}
            className="mb-2"
          /> For Commercial Banks</h3>
        <p className="text-gray-600 text-sm">
          To enable the making of informed, data-backed lending decisions that reduce risk and improve financial outcomes.
        </p>
      </div>

      {/* Policymakers */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <Image
            src={investment}
            alt="investment"
            width={32} // mini size
            height={32}
            className="mb-2"
          />
        
        <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-2">
          
          For Investment Banks
        </h3>
        <p className="text-gray-600 text-sm">
          To efficiently structure complex deals, provide strategic advice to clients, and conduct accurate valuations for huge enterprises.
        </p>
      </div>


      {/* Policymakers */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <Image
            src={accelerator}
            alt="investment"
            width={32} // mini size
            height={32}
            className="mb-2"
          />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          For Accelerator Programs</h3>
        <p className="text-gray-600 text-sm">
          To support startups in crafting compelling pitches by equipping them with solid, market-based valuation that enhances their credibility with investors.
        </p>
      </div>

      {/* Policymakers */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <Image
            src={investors}
            alt="investment"
            width={32} // mini size
            height={32}
            className="mb-2"
          />For Investors</h3>
        <p className="text-gray-600 text-sm">
          To evaluate potential investment opportunities with greater confidence, backed by reliable data and thorough market analysis.
        </p>
      </div>

      {/* Policymakers */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          <Image
            src={grant}
            alt="investment"
            width={32} // mini size
            height={32}
            className="mb-2"
          />For Grant Providers</h3>
        <p className="text-gray-600 text-sm">
          To assess the financial viability and growth potential of applicants, ensuring data-driven grant allocation decisions.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Benefit;
