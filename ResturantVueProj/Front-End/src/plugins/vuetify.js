// src/plugins/vuetify.js
import 'vuetify/styles' // Vuetify's global CSS
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // ✅ Import MDI icons

const vuetify = createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'dark', // or 'light'
  },

  icons: {
    defaultSet: 'mdi', // ✅ Set Material Design Icons as default
    aliases,
    sets: { mdi },
  },
})

export default vuetify
