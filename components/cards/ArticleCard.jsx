export default function ArticleCard({ date, imageSrc = '', title, children }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imageSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <time className="font-light" dateTime={date}>
          {date}
        </time>
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}
