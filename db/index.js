import coverMaria from 'img/cover-maria.jpg'
import coverFranco from 'img/cover-franco.jpg'
import donationPoint from "img/donation-point/donation-point.svg";
import blog from "img/blog/blog.svg";

export const articles = [
  {
    title: 'Programa educativo',
    description: 'El Programa Educativo cuenta con la colaboración de la Asociación Uruguaya de Fútbol (AUF) que permi te, a los niños y jóvenes promotores, visitar el estadio Centenario y presenciar partidos de la selección uruguaya',
    date: '27 de octubre',
    thumbnail: 'https://placeimg.com/400/225/arch'
  },
  {
    title: 'Compromiso social',
    description: 'A lo largo de todos estos años, hemos recibido la colaboración de empresas e instituciones. Acuerdos decooperación con cadenas de supermercados y asociaciones permitieron el desarrollo de la construcción, mantenimiento y progreso del Hemocentro.',
    date: '27 de octubre',
    thumbnail: 'https://placeimg.com/400/225/arch'
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
        title:'Chuy',
        place:'Rocha',
        date:'Lunes 3/10/22',
        hour:'08:30 a 14:30',
        description: '(Habilitada para Licencias de Conducir) JORNADA COMPLETA',
        mapSrc:'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6557.188775743783!2d-56.087894!3d-34.7406171!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666480283593!5m2!1ses-419!2suy'
      },
      {
        title:'Rocha',
        place:'Rocha',
        date:'Lunes 3/10/22',
        hour:'08:30 a 14:30',
        description: '(Habilitada para Licencias de Conducir) JORNADA COMPLETA',
        mapSrc:'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6560.461523497149!2d-56.041219705195395!3d-34.699359137795476!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666481830000!5m2!1ses-419!2suy'
      },
      {
        title:'Florida - Plaza Asamblea',
        place:'Florida',
        date:'Miércoles 21/9/22',
        hour:'08:00 a 13:30',
        description: '(Habilitada para Licencias de Conducir) JORNADA COMPLETA',
        mapSrc:'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6558.786666911593!2d-56.065530557793664!3d-34.72047860814268!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666481798799!5m2!1ses-419!2suy'
      },
    ]
  },
  blog: {
    title: 'blog',
    description: 'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!',
    image: blog,
    articles
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
