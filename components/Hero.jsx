export default function Hero({ children, backgroundImageUrl }) {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                {children}
            </div>
        </div>
    );
}
