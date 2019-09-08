import { withRouter } from 'next/router'

const UIComponents = ({children}) => <div>{children}</div>

const Params = ({router}) => <div>params: {router.query.id}</div>

export default withRouter(Params)
