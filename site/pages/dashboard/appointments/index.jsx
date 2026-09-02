import { component$ } from '@builder.io/qwik'
import {
    Appointments,
    loadAppointments,
} from 'appointments'

export default component$(() => {
    const data = loadAppointments().value

    return <Appointments {...data} />
})

export { loadAppointments }
