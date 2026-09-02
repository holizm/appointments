import { Appointment } from 'appointments'

export default ({
    appointments,
    translations,
}) => <main class='appointments'>
    <h1 class='title'>
        {translations?.appointmentsAppointments}
    </h1>
    <div class='items'>
        {
            appointments?.data?.map(appointment => <Appointment
                appointment={appointment}
                key={appointment.id}
            />)
        }
    </div>
</main>
