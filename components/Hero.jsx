import { useState, useEffect } from 'react'

export default function Hero({ children, backgroundImageUrl }) {
  const animationClass = 'animate-pulse'
  const [animation, setAnimation] = useState(animationClass)

  const runAnimation = () => {
    setAnimation(animationClass)
  }

  const stopAnimation = () => {
    setAnimation('')
  }

  useEffect(() => {
    stopAnimation()
    console.log('Hero/effect')
    setTimeout(() => {
      runAnimation()
    }, 300)
  }, [backgroundImageUrl])

  return (
    <div
      className="hero min-h-screen lg:min-h-[90vh] "
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div
        className={`hero-overlay bg-opacity-60 [ backdrop-blur-md ${animation} ]`}
      ></div>
      <div className="hero-content text-center text-neutral-content [ max-w-max ]">
        {children}
      </div>
    </div>
  )
}
