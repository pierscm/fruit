import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.deepPurple.darken1,
        secondary: colors.green.accent2,
        accent: colors.green.accent1
      }
    }
  }
});
