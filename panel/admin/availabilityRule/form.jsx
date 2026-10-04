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
        provider
        required
    />
    <Numeric
        dayOfWeek
        required
    />
    <Text
        required
        startTime
    />
    <Text
        endTime
        required
    />
    <Numeric
        placeholder='slotDuration'
        required
        slotDurationMinutes
    />
    <Boolean active />
</>

export default <DialogForm inputs={inputs} />
