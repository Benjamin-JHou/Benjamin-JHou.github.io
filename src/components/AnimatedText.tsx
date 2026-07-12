import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / chars.length
        const end = start + 0.5 / chars.length

        return (
          <CharSpan
            key={i}
            char={char}
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}
          />
        )
      })}
    </p>
  )
}

function CharSpan({
  char,
  scrollYProgress,
  start,
  end,
}: {
  char: string
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  if (char === ' ') {
    return <span className="inline">&nbsp;</span>
  }

  return (
    <span className="relative inline">
      <span className="opacity-20">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}
