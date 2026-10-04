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
        placeholder='provider'
        property='provider'
        required
    />
    <Numeric
        placeholder='dayOfWeek'
        property='dayOfWeek'
        required
    />
    <Text
        placeholder='startTime'
        property='startTime'
        required
    />
    <Text
        placeholder='endTime'
        property='endTime'
        required
    />
    <Numeric
        placeholder='slotDuration'
        property='slotDurationMinutes'
        required
    />
    <Boolean
        placeholder='active'
        property='active'
    />
</>

export default <DialogForm inputs={inputs} />
