import NextImage from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* MV */}
      <div className="flex w-screen justify-center bg-white pb-20">
        <div className="flex w-screen max-w-screen-lg flex-wrap justify-center py-6">
          <div className="w-full sm:max-w-[760px] flex">
            <div className="max-w-80 sm:max-w-[800px] mx-5 sm:mx-0 my-10 flex flex-wrap justify-start content-center gap-2 text-2xl sm:text-5xl font-bold text-primary-900">
              <p className="p-2 px-4 bg-gradient-to-r from-secondary to-primary-500 tracking-wider text-white">
                今年の収穫祭は、
              </p>
              <p className="p-2 px-4 bg-gradient-to-r from-secondary to-primary-500 tracking-wider text-white">
                96人&times;2days!
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
          <div>
            <p className="text-primary-900 font-extrabold text-2xl sm:text-4xl italic text-center mb-5">
              2024.10.19<span className="text-medium mx-1">(Sat.)</span> - 20
              <span className="text-medium mx-1">(Sun.)</span>
            </p>
            <p className="text-primary-900 font-extrabold text-2xl sm:text-4xl italic text-center">
              滝野川会館
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
