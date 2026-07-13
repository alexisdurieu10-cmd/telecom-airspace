import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Télécom Air & Space
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mb-10">
            L&apos;association d&apos;Aéronautique, Spatial et Défense de Télécom Paris
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/banniere.png"
              alt="Bannière Télécom Air & Space"
              width={832}
              height={431}
              priority
              className="w-full max-w-3xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
