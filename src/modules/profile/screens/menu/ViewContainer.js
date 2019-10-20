import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import View from './View'
import * as AppActions from './node_modules/~/root/app/store/actions'
import * as AuthActions from './node_modules/~/modules/auth/store/actions'

const mapStateToProps = state => ({
  app: state.app || {},
  auth: state.auth || {},  
})

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
  authActions: bindActionCreators(AuthActions, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(View)
