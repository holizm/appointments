import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>appointmentsNumber</th>
    <th>appointmentsService</th>
    <th>appointmentsProvider</th>
    <th>appointmentsCustomer</th>
    <th>appointmentsStartDate</th>
    <th>appointmentsStatus</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.service?.title}</td>
    <td>{item.provider?.title}</td>
    <td>{item.customer?.title}</td>
    <DateTime value={item.startDate} />
    <td>{item.appointmentStatus}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
