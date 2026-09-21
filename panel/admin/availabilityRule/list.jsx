import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>appointmentsAvailabilityRule</th>
    <th>appointmentsProvider</th>
    <th>coreDayOfWeek</th>
    <th>coreTime</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.provider?.title}</td>
    <td>{item.dayOfWeek}</td>
    <td>{`${item.startTime}–${item.endTime}`}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
