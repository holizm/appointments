import { ItemPage } from 'panel'
import fields from './itemPageFields'
import itemActions from './itemActions'
import relations from './itemPageRelations'

export default <ItemPage
    fields={fields}
    itemActions={itemActions}
    part='appointments'
    relations={relations}
    type='appointment'
/>
