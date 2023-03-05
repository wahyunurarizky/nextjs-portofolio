'use client'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web6 from '../../public/web6.png'
import web5 from '../../public/web5.png'

import { useState } from 'react'
import Link from 'next/link'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <main
      className={`px-10 md:px-20 lg:px-40 ${roboto.className} ${
        darkMode ? 'dark bg-gray-900' : ''
      }`}
    >
      <section className="min-h-scree">
        <nav className="py-10 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-gray-200">ARZKY</h1>
          <ul className={`flex items-center ${roboto.className}`}>
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-xl dark:text-gray-200"
              />
            </li>
            <li>
              <a
                href=""
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center">
          <h2 className="text-4xl pb-4 text-teal-600 font-medium md:text-6xl">
            Wahyu N. Arizky
          </h2>
          <h3 className="text-lg md:text-3xl dark:text-gray-200">
            Software Developer
          </h3>
          <p className="text-base py-5 md:text-xl max-w-2xl mx-auto leading-8 text-gray-800 dark:text-gray-300">
            I am a software developer with several experience. Desire to become
            a professional who is constantly learning. I enjoy working
            collaboratively but can also run with projects independently.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <Link
            href={'https://www.linkedin.com/in/wahyu-nur-arizky-a47275168/'}
          >
            <AiFillLinkedin className="dark:text-gray-200" />
          </Link>
          <Link href={'https://github.com/wahyunurarizky'}>
            <AiFillGithub className="dark:text-gray-200" />
          </Link>
          <Link href={'https://www.instagram.com/wahyunurarizky/'}>
            <AiFillInstagram className="dark:text-gray-200" />
          </Link>
        </div>
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
          <Image
            src={deved}
            alt="myimage"
            className="object-cover w-[100%] h-[100%]"
          />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-gray-200">Services I Offer</h3>
          <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            Lorem ipsum dolor sit <span className="text-teal-500">amet,</span>{' '}
            consectetur adipisicing elit. Aspernatur, saepe quasi odio
            consequuntur iure asperiores!
          </p>
          <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas
            labore modi.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-gray-200 dark:shadow-gray-600">
            <Image
              src={design}
              alt=""
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Beautifull Designs
            </h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              recusandae in, facilis officia commodi doloremque!
            </p>
            <h4 className="py-4 text-teal-400">Design tools I use</h4>
            <p className="text-gray-800 py-1  dark:text-gray-200">Photoshop</p>
            <p className="text-gray-800 py-1 dark:text-gray-200">Illustrator</p>
            <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-gray-200 dark:shadow-gray-600">
            <Image
              src={code}
              alt=""
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Beautifull Designs
            </h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              recusandae in, facilis officia commodi doloremque!
            </p>
            <h4 className="py-4 text-teal-400">Design tools I use</h4>
            <p className="text-gray-800 py-1 dark:text-gray-200">Photoshop</p>
            <p className="text-gray-800 py-1 dark:text-gray-200">Illustrator</p>
            <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-gray-200 dark:shadow-gray-600">
            <Image
              src={consulting}
              alt=""
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Beautifull Designs
            </h3>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              recusandae in, facilis officia commodi doloremque!
            </p>
            <h4 className="py-4 text-teal-400">Design tools I use</h4>
            <p className="text-gray-800 py-1 dark:text-gray-200">Photoshop</p>
            <p className="text-gray-800 py-1 dark:text-gray-200">Illustrator</p>
            <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            Lorem ipsum dolor sit <span className="text-teal-500">amet,</span>{' '}
            consectetur adipisicing elit. Aspernatur, saepe quasi odio
            consequuntur iure asperiores!
          </p>
          <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas
            labore modi.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <Image
              src={web1}
              alt=""
              className="rounded-lg object-cover w-[100%] h-[100%]"
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
              src={web2}
              alt=""
              className="rounded-lg object-cover w-[100%] h-[100%]"
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
              src={web3}
              alt=""
              className="rounded-lg object-cover w-[100%] h-[100%]"
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
              src={web4}
              alt=""
              className="rounded-lg object-cover w-[100%] h-[100%]"
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
              src={web5}
              alt=""
              className="rounded-lg object-cover w-[100%] h-[100%]"
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
              src={web6}
              alt=""
              className="rounded-lg object-cover w-[100%] h-[100%]"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
