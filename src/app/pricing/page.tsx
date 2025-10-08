import Image from "next/image";
import construction from "@/images/UnderConstructionPana.svg";
import Link from "next/link";

export default function Pricing() {
    return (
      <main className="flex-1 min-h-screen px-6 bg-foreground flex flex-col items-center justify-center text-center mb-10">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl transition-all duration-500">
        <Image
          src={construction}
          alt="Under construction illustration"
          width={800}
          height={500}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-2 text-4xl md:text-5xl font-bold text-background drop-shadow-md">
        <span className="text-5xl">🚧</span>
        <h1>Coming Soon</h1>
      </div>

      <p className="mt-4 text-lg md:text-xl text-muted-background text-background max-w-2xl px-4 md:px-0">
        This page is currently under construction. Check back soon!
      </p>

      <div className="mt-8">
        <Link href={'/'} className="bg-green-900 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-base md:text-lg transition shadow-md hover:shadow-lg">
          Back to Home
        </Link>
      </div>
    </main>
    );
  }
