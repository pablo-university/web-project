export default function Hero({ children, backgroundImageUrl }) {
  return (
    <div
      className="hero min-h-screen lg:min-h-[90vh]"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 [ backdrop-blur-md ]"></div>
      <div className="hero-content text-center text-neutral-content [ max-w-max ]">
        {children}
      </div>
    </div>
  )
}
