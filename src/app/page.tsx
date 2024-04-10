import NextImage from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex w-screen flex-wrap justify-center bg-white py-10">
        <div className="max-w-4/5 sm:max-w-[600px] m-10 flex flex-wrap justify-center gap-8 text-xl sm:text-4xl font-bold text-primary-900">
          <p className="w-full text-left">
            <div className="before:block before:absolute before:-inset-1 before:-skew-x-12 before:bg-primary relative inline-block px-2 mx-2">
              <span className="relative text-white">個性と実験</span>
            </div>
            のクイズイベント
          </p>
          <p className="w-full text-right">
            今年は
            <div className="before:block before:absolute before:-inset-1 before:-skew-x-12 before:bg-primary relative inline-block px-2 mx-2">
              <span className="relative text-white">2日間</span>
            </div>
            開催！
          </p>
        </div>
        <div className="relative my-10 w-4/5 sm:w-[600px] aspect-[30/7]">
          <NextImage
            src="/eventLogo.png"
            fill
            sizes="(max-width: 640px) 80vw, 600px"
            style={{ objectFit: 'contain' }}
            alt="logo"
          />
        </div>
      </div>
    </main>
  );
}
