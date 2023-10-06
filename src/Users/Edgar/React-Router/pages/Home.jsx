import React, { useEffect, useRef } from 'react'

export default function Home() {
  const h1ref = useRef(null); //{current: h1}
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)

      h1ref.current.innerText = window.innerWidth;

    }
    window.addEventListener('resize', handleResize)

    return () => {
      console.log(1111)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <h1 ref={h1ref}>Home pag2322sasa3ße</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore architecto at culpa libero magnam vitae, aliquam incidunt optio in repudiandae quos iste ipsum harum, unde provident dolorum rerum quo placeat eaque amet. Inventore enim, deserunt libero facilis id atque, expedita harum veritatis nostrum ipsam deleniti eius ullam, eum nisi?</p>
      <button >on click</button>
    </div>
  )
}
