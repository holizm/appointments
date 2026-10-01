export default item => <>
    <td>{item.title}</td>
    <td>{item.provider?.title}</td>
    <td>{item.dayOfWeek}</td>
    <td>{`${item.startTime}–${item.endTime}`}</td>
</>
