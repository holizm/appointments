import { component$ } from '@builder.io/qwik'
import AppointmentsAppointments from 'appointmentsAppointments'
import appointmentsLoadAppointments from 'appointmentsLoadAppointments'

export default component$(() => {
    const data = appointmentsLoadAppointments().value

    return <AppointmentsAppointments {...data} />
})

export { appointmentsLoadAppointments as loadAppointments }
