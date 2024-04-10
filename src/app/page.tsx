import NextImage from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex w-screen flex-wrap justify-center bg-white py-6">
        <div className="w-full sm:max-w-[760px] flex">
          <div className="max-w-80 sm:max-w-[760px] mx-5 my-10 flex flex-wrap justify-start content-center gap-2 text-2xl sm:text-5xl font-bold text-primary-900">
            <div>
              <p className="p-2 px-4 bg-gradient-to-r from-secondary to-primary-500 tracking-wider text-white">
                今年も、
              </p>
            </div>

            <p className="p-2 px-4  bg-gradient-to-r from-secondary to-primary-500 tracking-wider text-white">
              個性と実験の2日間。
            </p>
          </div>
        </div>
        <div className="relative mx-5 my-10 w-full sm:hidden aspect-[1280/720]">
          <NextImage
            src="/topLogo.png"
            fill
            sizes="91.67vw"
            style={{ objectFit: 'contain' }}
            alt="logo"
          />
        </div>
        <div className="hidden sm:block mx-5 my-20">
          <NextImage
            src="/topLogoLong.png"
            width={800}
            height={140}
            style={{ objectFit: 'contain' }}
            alt="logo"
          />
        </div>
      </div>
    </main>
  );
}
