import React from 'react'
import styles from './Canvas.module.scss'
export const Canvas: React.FC = ({}) => {
  const rootRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    if (rootRef.current) {
      rootRef.current.width = 1000
      rootRef.current.height = 600
      const ctx = rootRef.current.getContext('2d')

      if (ctx) {
        ctx.lineCap = 'round'
        ctx.lineWidth = 8
        ctx.strokeStyle = 'red'

        //ctx.clearRect(0, 0, canvas.width, canvas.height)

        rootRef.current.addEventListener('mousemove', (e) => {
          const x = e.offsetX
          const y = e.offsetY
          const dx = e.movementX
          const dy = e.movementY

          if (e.buttons > 0) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x - dx, y - dy)
            ctx.stroke()
            ctx.closePath()
          }
        })
      }
    }
  }, [])

  return <canvas ref={rootRef} className={styles.root} />
}
