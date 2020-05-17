import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faEye,
  faEyeSlash,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlus, faEye, faEyeSlash, faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);
