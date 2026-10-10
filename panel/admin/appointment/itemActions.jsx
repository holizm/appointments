import { ItemAction } from 'list'

export default item => <ItemAction
    goTo
    icon='visibility'
    query={{ id: item.id }}
    targetAction='item'
    title='coreView'
/>
