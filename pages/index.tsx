import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  BsFillMoonStarsFill,
  BsFillPlayFill,
  BsFillPlayCircleFill
} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin
} from 'react-icons/ai'

import { getSortedPostsData } from '../lib/posts.js'
import { formatDate } from '../lib/utils.js';

import deved from '../public/portrait.png'
import { CiClock1 } from "react-icons/ci";


export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// Define the type for the post data
type Post = {
  id: string;
  date: string; // Assuming date is a string, you can adjust the type as needed
  title: string;
  tags: string[];
  snippet: string;
  contentHtml: string;
  // Add other properties from the post metadata section
}

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  const [darkMode, setDarkMode] = useState(true);
  return (

    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Jonah's Portfolio</title>
        <meta name="description" content="Welcome to Jonah Oliver's personal website. 
        Explore my professional journey as a Data Analyst and Programmer, 
        dive into insightful blog posts on data engineering, programming, and technology trends" />
        <link rel="icon" href="/code.png" />
        <meta property="og:title" content="Jonah Oliver - Data Analyst, Programmer, and Tech Enthusiast" />
        <meta property="og:description" content="Explore my journey in Data Analysis and Programming. Check out the blog for insights on tech trends and industry best practices." />
        <meta property="og:image" content="/data-mentor.png" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='max-w-7xl mx-auto'>
          <nav className='py-10 mb-1 flex flex-row sm:flex md:flex lg:flex justify-between phone:hidden'>
            <h1 className='text-xl font-burtons text-slate-600 dark:text-slate-400 mb-4 sm:mb-0 phone:text-center'>developedbyjonah</h1>
            <div className='flex flex-col sm:flex-row items-center'>
              <div className='mb-4 sm:mb-0'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='text-xl cursor-pointer text-3xl mr-3 dark:text-teal-600 dark:hover:text-slate-400'>
                  {/* Moon/Stars Icon */}
                </BsFillMoonStarsFill>
              </div>
              <div className='text-xl px-4 py-2 text-white bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-md dark:from-teal-600 dark:to-teal-700 dark:hover:from-slate-400 dark:hover:to-slate-500'>
                <a target="_blank" rel="noopener noreferrer" href="https://1drv.ms/b/s!AvaHb03-LlJmi3MGBJEK2gwC6-ji?e=aJjZzI">Resume</a>
              </div>
            </div>
          </nav>
        </section>
        <section className='rounded-2xl flex flex-col md:flex-row 
        justify-center items-center text-center md:text-left max-w-7xl mx-auto py-5'>
          <div className='flex flex-col pt-5 md:flex-row md:px-10 sm:px-5 items-center md:items-start text-center md:text-left'>
            <div className='md:flex-grow phone:max-w-4xl'>
              <h1 className='text-5xl py-2 text-teal-600 font-bold md:text-6xl '>Jonah Oliver</h1>
              <h1 className='text-2xl py-2 text-teal-500 md:text-3xl dark:text-white phone:text-base'>Data Analyst and Programmer</h1>
              <p className='text-med py-5 leading-8 text-gray-600 md:text-xl max-w-lg  dark:text-slate-400  phone:flex-shrink'>
                Skilled professional offering data-driven solutions to unlock the potential of your data.
              </p>
              <div className='text-5xl flex justify-center md:justify-start gap-16 py-3 text-gray-700'>
                <a className='hover:text-sky-700' href="https://www.linkedin.com/in/jonah-oliver/">
                  <AiFillLinkedin />
                </a>
                <AiFillTwitterCircle />
              </div>
            </div>
            <div className='relative mx-auto rounded-full mb-10 overflow-auto scale-100 hover:scale-125 ease-in duration-500 mt-10 md:mt-0 md:ml-10
            phone:h-60 phone:w-60 lg:w-80 lg:h-80 md:w-80 md:h-80'>
              <Image src={deved} layout='fill' objectFit='cover' alt='Jonah Oliver' />
            </div>
          </div>
        </section>

        {/* blog posts */}
        <section className='py-10'>
          <div className='max-w-7xl mx-auto'>
            <h3 className='text-3xl pt-2 pb-10 dark:text-white text-center text-bold'>Recent Blog Posts</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
              {allPostsData.map(({ id, date, title, tags, snippet }) => (
                <div key={id} className='rounded-lg overflow-visible p-5'>
                  <div className='xl:h-80 lg:h-80 md:h-80 sm:h-80 phone:h-90'>
                    {/* Tags go here */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {tags.map((tag) => (
                        <span key={tag} className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-teal-600 bg-teal-200 dark:bg-teal-700 dark:text-teal-300'>
                          {tag}
                        </span>
                      ))}
                    {/* Title */}
                    </div>
                    <h4 className='text-2xl font-semibold mb-4 dark:text-white'>{title}</h4>
                    {/* Date */}
                    <div className='flex items-center'>
                      <CiClock1 className='text-xl dark:text-white' />
                      <p className='text-gray-600 pl-2 dark:text-gray-400 text-lg font-semibold'>{formatDate(date)}</p>
                    </div>
                    {/* Snippet */}
                    <p className='text-lg pt-2 font-semibold mt-4 mb-5 text-slate-600 dark:text-slate-400'>{snippet}</p>
                    <div className='flex items-center justify-between '>
                    <Link href={`/posts/${id}`} className='text-teal-600 hover:underline dark:hover:text-teal-400' passHref>
                      Read More
                    </Link>
                  </div>
                  </div>
                  
                  
                </div>
              ))}
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
    </div >
  )
}
