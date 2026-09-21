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
        placeholder='coreDayOfWeek'
        property='dayOfWeek'
        required
    />
    <Text
        placeholder='coreStartTime'
        property='startTime'
        required
    />
    <Text
        placeholder='coreEndTime'
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
