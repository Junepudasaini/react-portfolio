import Head from 'next/head';
import Image from 'next/image';
import deved from '../public/junepudasaini.jpg';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, } from 'react-icons/ai';


export default function Home() {
  return (
    <div>
      <main className='bg-black px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbyjuneunix</h1>
            <ul className='flex items-center'>
              <li className='cursor-pointer text-2xl'><BsFillMoonStarsFill /></li>
              <li>
                <a className='bg-gradient-to-r  from-cyan-500 to-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>June Pudasaini</h2>
            <h3 className='text-2xl py-2'>More developer and Less designer.</h3>
            <p className='text-md py-5 leading-8 text-yellow-400'>
              Now I am become Death, the destroyer of worlds.There are children playing in the streets who could solve some of my top problems in physics, because they have modes of sensory perception that I lost long ago.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-400'>
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>

        {/* Services */}

        <section>
          <div>
            <h3 className='text-3xl py-1 mt-5'>Services I offer</h3>
            <p className='text-md leading-8 text-yellow-400'>
              In addition to being passionate about programming, I am eager to challenge myself to do things I've never accomplished before and I strive to learn and improve on my skills every day (for example, if you have constructive criticism and suggestion about this newly-made website, I'd be very glad to hear them :D).
            </p>
          </div>
        </section>
      </main>

    </div>
  )
}
