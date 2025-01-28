import React from 'react'
import Typed from 'typed.js'
import Emoji from '@/components/twemoji'
import Link from 'next/link'
import Image from 'next/image'
import { Tooltip } from 'antd'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    const options = {
      strings: [
        'Currently in Tracy,CA',
        'I was raised in New Delhi.',
        'I like talking tech to people',
        'Follow along on my journey',
        '...',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="clip  text-7xl font-extrabold text-transparent dark:to-blue-500">
        Hi Friends,
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg">
        <p>
          Welcome! I’m <b>hans</b>. <Emoji kind="partyingFace" />
        </p>

        <p>hans is the abbreviation I use on social media.</p>

        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />

          <p>
          Welcome to my digital corner! This website is my personal canvas, where I paint the picture of my professional journey, share insights through regular blog posts, 
          and bring my travel adventures to life.  Feel free to{' '}
            <Link href="/about"> get to know me better.</Link>
          </p>
        </div>
      </div>
      {/* NewBlogButton */}
      <Tooltip title="" trigger="hover">
        <Link
          className="fixed bottom-40 sm:bottom-20 right-8 cursor-pointer hover:shadow-lg hover:brightness-125"
          target="_blank"
          href={``}
        >
          <Image src="/button/add.svg" className="w-24 sm:w-32" alt="" width={140} height={30} />
        </Link>
      </Tooltip>
    </div>
  )
}

export default Greetings
