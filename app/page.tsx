import Gif from './components/Gif'
import Karusel from './components/karusel/Karusel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-center">
      <div className='rotate-18' style={{transform: "rotate(323deg)", width: '110%',
    position: 'fixed',
    top: '20%',
    right: '20%',}}>
        <Karusel />
      </div>
      <div className='rotate-345' style={{transform: "rotate(26deg)", width: '110%',
    position: 'fixed',
    top: '50%',
    right: '20%',}}>
        <Karusel />
      </div>
      <Gif />
    </main>
  )
}
