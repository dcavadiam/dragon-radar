import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center py-2 min-h-screen">
        <h1 className="text-2xl font-bold">Dragon Radar</h1>
        <p className="text-gray-600 mb-4">In progress...</p>
        <Image src="/super-buu-hourglass.gif" alt="super buu waiting" width={500} height={500} className="rounded-lg" />
      </main>
      <footer className="flex flex-col items-center justify-center py-2 absolute bottom-0 left-0 right-0">
        <a href="https://github.com/diego3g/dragon-radar" className="text-gray-600 hover:text-gray-800">
        Code on GitHub
        </a>
      </footer>
    </>
  );
}
