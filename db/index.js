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
  donationPoint: {
    title: 'Puntos de donación',
    description: 'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!',
    image: donationPoint,
    points: [
      {
        title:'',
        place:'',
        date:'',
        hour:'',
        description: ''
      }
    ]
  },
  blog: {
    title: 'blog',
    description: 'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!',
    image: blog,
  }
}
