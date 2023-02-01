import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  BsFillMoonStarsFill, 
  BsFillPlayFill,
  BsFillPlayCircleFill
} from 'react-icons/bs';
import {
  AiFillTwitterCircle, 
  AiFillLinkedin
} from 'react-icons/ai'


import deved from '../public/avi1.png'
import visualization from '../public/DataVisualization.png'
import code from '../public/code_snippet.png'
import table from '../public/icons8-table-96.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'





export default function Home() {

   return (

    <div>
      <Head>
        <title>Jonah Oliver Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-1 flex justify-between'>
          <h1 className='text-xl font-burtons'>developedbyjonah</h1>
          <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-3xl mr-3'/>
              </li>
              <li className='text-xl px-4 py-2 text-white bg-gradient-to-b bg-cyan-500 rounded-md'>
                <a target="_blank" rel="noopener noreferrer" href="https://1drv.ms/b/s!AvaHb03-LlJmi3MGBJEK2gwC6-ji?e=aJjZzI">Resume</a>
              </li>
          </ul>
          </nav>
          <div className='text-center p-10 py-1'>
            <h2 className='text-5xl py-2 text-teal-600 font-bold md:text-6xl'>Jonah Oliver</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Data Analyst and Programmer</h3>
            <p className='text-med py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>Skilled data professional with experience in ETL pipeline building, data extraction, and dashboard creation. 
            I have a strong background in using technologies such as Python, SQL Server, Azure DevOps, PowerBI and more.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-700'>
            <a className=' hover:text-sky-700' href="https://www.linkedin.com/in/jonah-oliver/">
            <AiFillLinkedin/>
            </a>
            <AiFillTwitterCircle />
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 mb-10 overflow-auto scale-100 hover:scale-125 ease-in duration-500'>
            <Image src={deved} layout='fill' objectFit='cover' alt='avi'/>
          </div>
        </section>

        <section className='mx-auto justify-center '>
          <div className='mx-auto justify-center pb-20'>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>Since the beginning of my journey as a freelance designer
            and developer, I've done remote work for <span className='text-teal-500'>agencies </span>
            consulted for <span className='text-teal-500'>startups</span> and collaborated with talented people to create
            digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-80'> I offer from a wide range of services, including brand design, programming and teaching.
            </p>
          </div>
          <div className='flex flex-wrap lg:gap-10 mx-auto justify-center'>
              <div className='text-center shadow-lg shadow-slate-800 p-10 my-10 pb-5 rounded-xl max-w-xl md:px-32 lg:px-30'>
                <div className='mx-auto pb-8'>
                  <div className='flex items-end justify-evenly h-40'>
                    <div className='bg-blue-500 mr-5 w-1/4 h-2/6 rounded-t-lg transform hover:scale-125 ease-in duration-50 hover:bg-blue-900'></div>
                    <div className='bg-blue-500 mr-5 w-1/4 h-3/6 rounded-t-lg transform hover:scale-125 ease-in duration-100 hover:bg-blue-900'></div>
                    <div className='bg-blue-500 mr-5 w-1/4 h-5/6 rounded-t-lg transform hover:scale-125 ease-in duration-100 hover:bg-blue-900'></div>
                    <div className='bg-blue-500 mr-5 w-1/4 h-full rounded-t-lg transform hover:scale-125 ease-in duration-100 hover:bg-blue-900'></div>
                  </div>
                </div>
                <h3 className='text-lg font-medium pt-5 pb-2'>Data Visualization</h3>
                <p>Creating elegant designs suited for you needs following core design theory</p>
                <h4 className='py-2 text-teal-600'>Visualization tools I use</h4>
                <p className='text-gray-800 py-1'>Python</p>
                <p className='text-gray-800 py-1'>Power BI</p>
                <p className='text-gray-800 py-1'>Excel </p>
              </div>

              <div className='text-center shadow-lg shadow-slate-500 p-10 my-10 pb-5 rounded-xl max-w-xl md:px-32 lg:px-30'>
                <div className='text-center mx-auto bg-neutral-800 text-white rounded-xl'>
                <div className='mx-auto bg-neutral-600 rounded-t-xl h-8 pt-2'>
                <BsFillPlayFill className='scale-125 cursor-pointer ml-3 hover:text-green-400'></BsFillPlayFill>
                </div>
                
                <ul className='text-justify text-green-600 rounded-xl h-40 pt-5 md:px-10 md:h-40 lg: px-10'>
                  <pre>
                  <li>1 | def HelloWorld(name=None):</li>
                  <li>2 |    return f"Hello, &#123;name&#125;"</li>
                  <li>3 |</li>
                  <li>4 | HelloWorld(name='Jonah')</li>
                  </pre>
                </ul>
                
                </div>
                <h3 className='text-lg font-medium pt-5 pb-2'>Programming</h3>
                <p>Creating elegant designs suited for you needs following core design theory</p>
                <h4 className='py-2 text-teal-600'>Programming tools I use</h4>
                <p className='text-gray-800 py-1'>Python</p>
                <p className='text-gray-800 py-1'>SQL</p>
                <p className='text-gray-800 py-1'>Excel </p>
              </div>

              <div className='text-center shadow-lg shadow-slate-500 p-10 my-10 pb-5 rounded-xl max-w-xl justify-center md:px-32 lg:px-30'>
                <Image src={table} className='mx-auto scale-125' alt='data table icon'/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Data Modeling</h3>
                <p>Creating elegant designs suited for you needs following core design theory</p>
                <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>
          </div>
        </section>

        {/* <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>Since the beginning of my journey as a freelance designer
            and developer, I've done remote work for <span className='text-teal-500'>agencies </span>
            consulted for <span className='text-teal-500'>startups</span> and collaborated with talented people to create
            digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-80'> I offer from a wide range of services, including brand design, programming and teaching.
            </p>
              <div>
                <Image src={web1} alt='img 1'></Image>
              </div>
              <div>
                <Image src={web2} alt='img 2'></Image>
              </div>
              <div>
                <Image src={web3} alt='img 3'></Image>
              </div>
          </div>
        </section> */}

      </main>
    </div>
  )
}
