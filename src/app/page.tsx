import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-around space-y-20 pt-2">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 right-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            src="/logo.png"
            alt="zero one labs"
            width={100}
            height={24}
            priority
          />
        </div>
        <div className="flex flex-row items-center space-x-16">
          <p className="">Home</p>
          <p>Product</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">connect</code>
        </p>
      </div>

      <div className="flex flex-col space-y-8 place-items-center font-sans">
        <p className="text-6xl text-center">
          Develop in house <br /> language systems at <br /> lightning speed
        </p>
        <p className="text-center">
          Fully customized with your data to serve your customers at scale and
          grow exponentially. <br />
          Integrate, Vectorise, Customize and Serve. All in one go.
        </p>
      </div>

      <div className="flex flex-row justify-center border rounded w-full max-w-3xl z-100">
        <div className="flex items-center px-4 py-2 bg-white w-full">
          <input
            type="text"
            placeholder="query about us..."
            className="flex-1 outline-none text-black"
          />
        </div>
        <button className="bg-black-800 text-white px-4 py-2 rounded w-32">
          Run query
        </button>
      </div>
      <div className="relative">
        <Image
          src="/screens.svg"
          alt="zero one labs"
          width={1500}
          height={1500}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>
    </main>
  );
}
