import 'vuetify/styles'
import {createVuetify} from "vuetify"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {customLight} from "../../../../../../../../modules/solar.booking/lib/ui/theme";

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