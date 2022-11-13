import {
  compromisoSocial,
  conexiones,
  confort,
  encuentros,
  personal,
  polo,
  practicas,
  defaultArticlesSvg,
} from 'img/articles'

// importaciones de imágenes de articulos
import programaEducativo from 'img/articles/programaEducativo'

export const articles = [
  /* {
    id: 0,
    title: 'Programa educativo',
    subtitle: 'Generaciones solidarias',
    description: `Mucho tiempo pasó desde que iniciamos el Progra ma Educativo, tanto que los primeros alumnos que nos conocieron y ayudaron en la búsqueda de voluntarios ya son donantes. Para el Hemocentro esos jóvenes son la confirmación que los valores se siembran y a la larga dan sus frutos, Los resultados que soñamos se hicie ron realidad, acercándonos donantes voluntarios y altruistas.

    Tenemos con ellos un vínculo especial, son líderes de la soli daridad, niños que querían ser donantes y que en cuanto su edad se los permitió, se acercaron al Hemocentro a hacerlo. Generamos una relación de mucho tiempo, ellos sabiendo que podían contar con nuestro centro cuando lo precisaran y no sotros sintiéndolos como los mejores aliados.
    
    Con 10, 11 o 12 años fueron los primeros promotores de nues tro trabajo. Junto a sus maestros estudiaron la sangre, el siste ma circulatorio, conocieron el Hemocentro, sus laboratorios, escucharon a técnicos que les contaron lo valioso que es la donación de sangre. Prepararon jornadas de donación y de la forma más creativa invitaron a sus familias y amigos. Fueron excelentes anfitriones que cuidaron y mimaron a cada donan te. Demostraron su talento y entusiasmo en canciones, juegos, danza para dar el mensaje de solidaridad. Su compromiso ha cia la vida no quedó en la escuela, creció con ellos y los acom paña hasta el día de hoy.`,
    date: '27 de octubre',
    cover: {
      url: programaEducativo.cover.src
    },
    coverExtension: {
      url: programaEducativo.coverExtension.src
    },
    published: true,
  }, */
  /* {
    id: 1,
    title: 'Compromiso social',
    description: 'A lo largo de todos estos años, hemos recibido la colaboración de empresas e instituciones. Acuerdos decooperación con cadenas de supermercados y asociaciones permitieron el desarrollo de la construcción, mantenimiento y progreso del Hemocentro.',
    date: '27 de octubre',
    cover: { url: compromisoSocial.src },
    coverExtension: { url: compromisoSocial.src },
    published: false
  }, */
  {
    id: 2,
    title: 'Personal en formación',
    description:
      'Es vocación y lo ha sido desde siempre, la capacitación de nuestros recursos humanos. Para ello, en el Hemocentro Re gional de Maldonado creamos las condiciones necesarias para el acceso a la actualización de conocimiento, técnicas inno vadoras y avances científicos. Alentamos y propiciamos que nuestro personal asista a cursos, congresos e intercambios en Uruguay y en el exterior.',
    date: '27 de octubre',
    cover: { url: personal.src },
    coverExtension: personal,
    published: false,
  },
  {
    id: 3,
    title: 'Encuentros internacionales',
    description:
      'Con el fin de favorecer la educación continua en medicina trans fusional, desde el Hemocentro organizamos y fomentamos la participación del personal en talleres, cursos y congresos',
    date: '27 de octubre',
    cover: { url: encuentros.src },
    coverExtension: encuentros,
    published: false,
  },
  {
    id: 4,
    title: 'Confort, calidad y tecnología avanzada',
    description:
      'El punto de partida de un centro de hemoterapia mode lo fue contar con un proyecto constructivo de avanzada. El diseño estuvo a cargo de la arquitecta Rossana Cimino quien lo hizo de forma totalmente honoraria.',
    date: '27 de octubre',
    cover: { url: confort.src },
    coverExtension: confort,
    published: false,
  },
  {
    id: 5,
    title: 'Polo de investigación',
    description:
      'Nuestro centro tiene las puertas abiertas a la investigación científica en medicina transfusional. Es por eso que alenta mos a nuestros técnicos a desarrollar trabajos académicos y recibimos a estudiantes del exterior.',
    date: '27 de octubre',
    cover: { url: polo.src },
    coverExtension: polo,
    published: false,
  },
  {
    id: 6,
    title: 'Prácticas estudiantiles',
    description:
      'Participamos en la formación de nuevos Técnicos en Hemo terapia a través de un convenio con la Escuela Universitaria de Tecnología Médica (EUTM) de la Facultad de Medicina de la Universidad de la República por el cual estudiantes avan zados realizan pasantías en el Hemocentro. Para ello, ambas instituciones, Hemocentro y EUTM hemos creado una Unidad Docente Asistencial (UDA) que permite a los alumnos realizar prácticas cortas y remuneradas en el Hemocentro, bajo la tu toría de un docente.',
    date: '27 de octubre',
    cover: { url: practicas.src },
    coverExtension: practicas,
    published: false,
  },
  {
    id: 7,
    title: 'Conexiones estratégicas',
    description:
      'Bajo la consigna "Sangre celeste...y donamos para que no te falte" decenas de niños pudieron disfrutar de los encuentros de portivos en nuestro principal escenario. Y tuvieron la oportuni dad de ver a los futbolistas que nos representan en campeonatos mundiales.',
    date: '27 de octubre',
    thumbnail: defaultArticlesSvg,
    cover: { url: conexiones.src },
    coverExtension: conexiones,
    published: false,
  },
]

export const donationPoints = [
  {
    title: 'Chuy',
    place: 'Rocha',
    date: 'Lunes 3/10/22',
    hour: '08:30 a 14:30',
    description: '(Habilitada para Licencias de Conducir) JORNADA COMPLETA',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6557.188775743783!2d-56.087894!3d-34.7406171!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666480283593!5m2!1ses-419!2suy',
  },
  {
    title: 'Rocha',
    place: 'Rocha',
    date: 'Lunes 3/10/22',
    hour: '08:30 a 14:30',
    description: '(Habilitada para Licencias de Conducir) JORNADA COMPLETA',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6560.461523497149!2d-56.041219705195395!3d-34.699359137795476!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666481830000!5m2!1ses-419!2suy',
  },
  {
    title: 'Florida - Plaza Asamblea',
    place: 'Florida',
    date: 'Miércoles 21/9/22',
    hour: '08:00 a 13:30',
    description: '(Habilitada para Licencias de Conducir) JORNADA COMPLETA',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6558.786666911593!2d-56.065530557793664!3d-34.72047860814268!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1666481798799!5m2!1ses-419!2suy',
  },
]
