import AOS from 'aos'

import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({ duration: 500, easing: 'ease-in', once: true }) // eslint-disable-line new-cap
}
