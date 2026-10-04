import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='service'
        property='service'
        required
    />
    <Text
        placeholder='provider'
        property='provider'
        required
    />
    <Text
        placeholder='customer'
        property='customer'
        required
    />
    <DateTime
        placeholder='startDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='endDate'
        property='endDate'
        required
    />
    <Select
        options={[
            'requested',
            'confirmed',
            'rescheduled',
            'cancelled',
            'completed',
            'noShow',
        ]}
        placeholder='state'
        property='appointmentStatus'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
