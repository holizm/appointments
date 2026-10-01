import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.service?.title}</td>
    <td>{item.provider?.title}</td>
    <td>{item.customer?.title}</td>
    <DateTime value={item.startDate} />
    <td>{item.appointmentStatus}</td>
</>
