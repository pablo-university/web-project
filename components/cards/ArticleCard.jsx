export default function ArticleCard({ date, imageSrc = '', title, children }) {
  return (
    <div className="card bg-base-100 [ transition border duration-300 hover:shadow-xl ]">
      <figure>
        <img
          className="w-full md:h-56 object-cover"
          src={imageSrc}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <time className="font-light text-primary" dateTime={date}>
          {date}
        </time>
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-3 md:line-clamp-4">{children}</p>
      </div>
    </div>
  )
}
