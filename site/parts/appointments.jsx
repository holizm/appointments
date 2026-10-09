import List from 'list'
import AppointmentsAppointment from 'appointmentsAppointment'

export default ({
    appointments,
    translations,
}) => <main class='appointments'>
    <h1 class='title'>
        {translations?.appointmentsAppointments}
    </h1>
    <List class='items appointments'>
        {
            appointments?.data?.map(appointment => <AppointmentsAppointment
                appointment={appointment}
                inList
                key={appointment.id}
            />)
        }
    </List>
</main>
