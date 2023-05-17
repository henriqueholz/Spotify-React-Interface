import { Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-2 text-xs front-semibold text-zinc-100">              
              <HomeIcon/>
              Home
            </a>
            <a href="" className="flex items-center gap-2 text-xs front-semibold text-zinc-100">              
              <Search/>
              Search
            </a>
            <a href="" className="flex items-center gap-2 text-xs front-semibold text-zinc-100">              
              <Library/>
              Library
            </a>
          </nav>

          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brazil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Funk</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Best of Bruno Mars</a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="w-6 h-6 rounded-full bg-black/20">
              <ChevronLeft/>
            </button>
            <button className="w-6 h-6 rounded-full bg-black/20">
              <ChevronRight/>
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">
            Good Afternoon!
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-4"> 
            <a href="#" className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Capa da banda" width={104} height={104}/> 
              <strong>Wasting Light</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Capa da banda" width={104} height={104}/> 
              <strong>Wasting Light</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Capa da banda" width={104} height={104}/>
              <strong>Wasting Light</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Capa da banda" width={104} height={104}/> 
              <strong>Wasting Light</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Capa da banda" width={104} height={104}/> 
              <strong>Wasting Light</strong>
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
            <a className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album.jpg" alt="Capa da banda" width={104} height={104}/>
              <strong>Wasting Light</strong> 
              <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play/>
              </button>
            </a>
          </div>

          <h1 className="font-semibold text-3xl mt-10">
            Made for Henrique Castro
          </h1>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white-10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong> Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white-10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong> Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white-10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong> Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white-10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong> Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>
            <a className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white-10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong> Daily mix 1</strong>
              <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
            </a>

          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/album.jpg" width={56} height={56} alt="Capa do álbum Ghost Stories da banda Coldplay" />
        <div className="flex flex-col">
          <strong className="font-normal">Ghost Stories</strong>
          <span className="text-xs text-zinc-400">Coldplay</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 rounded-full w-40 bg-zinc-200">
            </div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>          
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-10 bg-zinc-200">
            </div>
          </div>
        </div>
        <Maximize2 size={20} />          
      </div>
    </footer>
    </div>
  )
}
