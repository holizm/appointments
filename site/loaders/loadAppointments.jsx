import { routeLoader$ } from '@builder.io/qwik-city'
import useAsync from 'useAsync'
import globalizationGetGlobalization from 'globalizationGetGlobalization'
import appointmentsGetAppointments from 'appointmentsGetAppointments'

export default routeLoader$(async props => {
    const [
        appointments,
        globalization,
    ] = await useAsync([
        appointmentsGetAppointments(props),
        globalizationGetGlobalization(props),
    ])

    const result = {
        appointments,
        ...globalization,
    }
    return result
})
