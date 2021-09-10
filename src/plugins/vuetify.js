import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import tr from "vuetify/lib/locale/tr";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { tr },
    current: "tr",
  },
  theme: {
    themes: {
      light: {
        primary: "#b71c1c",
        secondary: "#424242",
        accent: "#484F55",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
