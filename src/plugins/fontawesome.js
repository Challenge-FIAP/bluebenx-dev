import Vue from "vue"
import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronLeft, faArrowRight, faArrowLeft)

dom.watch()

Vue.component("fa-icon", FontAwesomeIcon)
