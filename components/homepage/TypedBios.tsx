import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          People usually call me <b className="font-medium">Ram</b> in short.
        </li>
        <li>
          I live in <b className="font-medium">Hyderabad, India</b>.
        </li>
        <li>
          I was born in <b className="font-medium">Patna</b>.
        </li>
        <li>
          I speak <b className="font-medium">Hindi, English and bit of Bhojpuri</b>.
        </li>
        <li>
          I learned <b className="font-medium">C</b> as my first language.
        </li>
        <li>I love doing Data things.</li>
        <li>I mostly work with Python.</li>
        <li>I'm learning web development by Leon's 100Devs course.</li>

        <li>
          I love playing chess <Twemoji emoji="chess-pawn" />
        </li>
        <li>
          I love listening to songs <Twemoji emoji="songs" />
        </li>
        <li>
          I love meditation <Twemoji emoji="meditation" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
