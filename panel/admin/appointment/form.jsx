import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <Text
        required
        service
    />
    <Text
        provider
        required
    />
    <Text
        customer
        required
    />
    <DateTime
        required
        startDate
    />
    <DateTime
        endDate
        required
    />
    <Select
        appointmentStatus
        options={[
            'requested',
            'confirmed',
            'rescheduled',
            'cancelled',
            'completed',
            'noShow',
        ]}
        placeholder='state'
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
