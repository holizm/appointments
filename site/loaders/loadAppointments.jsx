import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'core'
import { getGlobalization } from 'globalization'
import { getAppointments } from 'appointments'

export default routeLoader$(async props => {
    const [
        appointments,
        globalization,
    ] = await useAsync([
        getAppointments(props),
        getGlobalization(props),
    ])

    const result = {
        appointments,
        ...globalization,
    }
    return result
})
