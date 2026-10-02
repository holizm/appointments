import { Item } from 'core'
export default ({
    appointment,
    inList,
}) => <Item
    class='appointment'
    inList={inList}
>
    <h2 class='service'>{appointment?.service?.title}</h2>
    <time class='startDate'>{appointment?.startDate}</time>
    <span class='provider'>{appointment?.provider?.title}</span>
    <span class='status'>{appointment?.appointmentStatus}</span>
</Item>
