import {createVuetify} from "vuetify"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const customLight = {
    colors: {
        primary: '#349f93',
        secondary: '#2196F3',
        primaryBtn: '#1A4680',
        secondaryBtn: '#49454F',
        divider: '#79747E',
        background: '#FFFFFF',
        surface: '#FFFFFF',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}
export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'customLight',
        themes: {
            customLight
        }
    }
})