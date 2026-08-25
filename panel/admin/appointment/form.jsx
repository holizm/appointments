import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='appointmentsNumber'
        property='number'
        required
    />
    <Text
        placeholder='appointmentsService'
        property='service'
        required
    />
    <Text
        placeholder='appointmentsProvider'
        property='provider'
        required
    />
    <Text
        placeholder='appointmentsCustomer'
        property='customer'
        required
    />
    <DateTime
        placeholder='appointmentsStartDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='appointmentsEndDate'
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
        placeholder='appointmentsStatus'
        property='appointmentStatus'
        required
    />
    <LongText
        placeholder='coreDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
