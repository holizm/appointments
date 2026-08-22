import {
    Boolean,
    DialogForm,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='appointmentsProvider'
        property='provider'
        required
    />
    <Numeric
        placeholder='appointmentsDayOfWeek'
        property='dayOfWeek'
        required
    />
    <Text
        placeholder='appointmentsStartTime'
        property='startTime'
        required
    />
    <Text
        placeholder='appointmentsEndTime'
        property='endTime'
        required
    />
    <Numeric
        placeholder='appointmentsSlotDuration'
        property='slotDurationMinutes'
        required
    />
    <Boolean
        placeholder='appointmentsActive'
        property='active'
    />
</>

export default <DialogForm inputs={inputs} />
