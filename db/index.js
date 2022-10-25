import coverMaria from 'img/cover-maria.jpg'
import coverFranco from 'img/cover-franco.jpg'
import donationPoint from "img/donation-point/donation-point.svg";
import blog from "img/blog/blog.svg";
import { compromisoSocial, conexiones, confort, encuentros, personal, polo, practicas, programaEducativo } from "img/blog/articles";


export const articles = [
  {
    title: 'Programa educativo',
    description: 'El Programa Educativo cuenta con la colaboración de la Asociación Uruguaya de Fútbol (AUF) que permi te, a los niños y jóvenes promotores, visitar el estadio Centenario y presenciar partidos de la selección uruguaya',
    date: '27 de octubre',
    thumbnail: programaEducativo
  },
  {
    title: 'Compromiso social',
    description: 'A lo largo de todos estos años, hemos recibido la colaboración de empresas e instituciones. Acuerdos decooperación con cadenas de supermercados y asociaciones permitieron el desarrollo de la construcción, mantenimiento y progreso del Hemocentro.',
    date: '27 de octubre',
    thumbnail: compromisoSocial
  },
  {
    title: 'Personal en formación',
    description: 'Es vocación y lo ha sido desde siempre, la capacitación de nuestros recursos humanos. Para ello, en el Hemocentro Re gional de Maldonado creamos las condiciones necesarias para el acceso a la actualización de conocimiento, técnicas inno vadoras y avances científicos. Alentamos y propiciamos que nuestro personal asista a cursos, congresos e intercambios en Uruguay y en el exterior.',
    date: '27 de octubre',
    thumbnail: personal
  },
  {
    title: 'Encuentros internacionales',
    description: 'Con el fin de favorecer la educación continua en medicina trans fusional, desde el Hemocentro organizamos y fomentamos la participación del personal en talleres, cursos y congresos',
    date: '27 de octubre',
    thumbnail: encuentros
  },
  {
    title: 'Confort, calidad y tecnología avanzada',
    description: 'El punto de partida de un centro de hemoterapia mode lo fue contar con un proyecto constructivo de avanzada. El diseño estuvo a cargo de la arquitecta Rossana Cimino quien lo hizo de forma totalmente honoraria.',
    date: '27 de octubre',
    thumbnail: confort
  },
  {
    title: 'Polo de investigación',
    description: 'Nuestro centro tiene las puertas abiertas a la investigación científica en medicina transfusional. Es por eso que alenta mos a nuestros técnicos a desarrollar trabajos académicos y recibimos a estudiantes del exterior.',
    date: '27 de octubre',
    thumbnail:polo
  },
  {
    title: 'Prácticas estudiantiles',
    description: 'Participamos en la formación de nuevos Técnicos en Hemo terapia a través de un convenio con la Escuela Universitaria de Tecnología Médica (EUTM) de la Facultad de Medicina de la Universidad de la República por el cual estudiantes avan zados realizan pasantías en el Hemocentro. Para ello, ambas instituciones, Hemocentro y EUTM hemos creado una Unidad Docente Asistencial (UDA) que permite a los alumnos realizar prácticas cortas y remuneradas en el Hemocentro, bajo la tu toría de un docente.',
    date: '27 de octubre',
    thumbnail:practicas
  },
  {
    title: 'Conexiones estratégicas',
    description: 'Bajo la consigna "Sangre celeste...y donamos para que no te falte" decenas de niños pudieron disfrutar de los encuentros de portivos en nuestro principal escenario. Y tuvieron la oportuni dad de ver a los futbolistas que nos representan en campeonatos mundiales.',
    date: '27 de octubre',
    thumbnail: conexiones
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
