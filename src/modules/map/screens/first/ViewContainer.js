import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import View from './View'
import * as AppActions from '~/root/app/store/actions'
import * as MapActions from '../../store/actions'
import * as AuthActions from '~/modules/auth/store/actions'

const mapStateToProps = state => ({
  app: state.app || {},
  map: state.map || {},  
})

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
  mapActions: bindActionCreators(MapActions, dispatch),
  authActions: bindActionCreators(AuthActions, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(View)