import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  function handleClick() {
    <div>
    <ul>
    {names.map((name) => (
      <li key={name}>{name}</li>
    ))}
  </ul>
  </div>
  }

  return (
    
    <div>
      <Head><title>title="Develop. Preview. Ship. 🚀"</title></Head>
      <button onClick={handleClick}>Click</button>
    </div>
     
  )
}
