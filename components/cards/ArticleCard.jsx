export default function ArticleCard({ date, imageSrc = '', title, children }) {
  return (
    <div className="card bg-base-100 [ transition border hover:shadow-xl ]">
      <figure>
        <img src={imageSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <time className="font-light" dateTime={date}>
          {date}
        </time>
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-3 md:line-clamp-4">{children}</p>
      </div>
    </div>
  )
}
