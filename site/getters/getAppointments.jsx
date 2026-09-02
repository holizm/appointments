import { getWithAuthentication } from 'core'

export default props => getWithAuthentication('/appointments/appointment/list', props)
