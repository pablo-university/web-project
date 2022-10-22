import coverMaria from 'img/cover-maria.jpg'
import coverFranco from 'img/cover-franco.jpg'
import donationPoint from "img/donation-point/donation-point.svg";
import blog from "img/blog/blog.svg";

export const articles = [
  {
    name: '',
    description: 'asdasd',
  },
]
export const configs = {
  testimonials: [
    {
      name: 'María',
      description:
        'Hoy han pasado 3 años desde que se vió envuelta en una situación la cuál le requirió una transfusión de sangre la cuál fué proporcionada por el Hemocentro Maldonado.',
      image: coverMaria,
    },
    {
      name: 'Franco',
      description:
        'Luego de sufrir un accidente se encontró bajo la necesidad de sangre, así fué como conoció el Hemocentro Maldonado, hoy se encuentra recuperada y feliz!',
      image: coverFranco,
    },
  ],
}
export const pages = {
  home: {},
  donationPoints: {
    title: 'Puntos de donación',
    description: 'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!',
    image: donationPoint,
    points: [
      {
        title:'test',
        place:'test',
        date:'test',
        hour:'test',
        description: 'test',
        mapSrc:'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6557.188775743783!2d-56.087894!3d-34.7406171!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666480283593!5m2!1ses-419!2suy'
      }
    ]
  },
  blog: {
    title: 'blog',
    description: 'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!',
    image: blog,
  },
  donate: {
    title: 'donate',
    description: 'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!',
    image: blog,
  },
  hoursAndConditios: {
    title: 'hoursAndConditios',
    description: 'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!',
    image: blog,
  },
  articles: {
    title: 'articles',
    description: 'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!',
    image: blog,
    articles: articles
  }
}
