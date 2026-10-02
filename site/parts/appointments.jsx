import { List } from 'core'
import { Appointment } from 'appointments'

export default ({
    appointments,
    translations,
}) => <main class='appointments'>
    <h1 class='title'>
        {translations?.appointmentsAppointments}
    </h1>
    <List class='items appointments'>
        {
            appointments?.data?.map(appointment => <Appointment
                appointment={appointment}
                inList
                key={appointment.id}
            />)
        }
    </List>
</main>
