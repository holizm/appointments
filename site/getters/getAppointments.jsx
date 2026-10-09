import { getWithAuthentication } from 'getWithAuthentication'

export default props => getWithAuthentication('/appointments/appointment/list', props)
