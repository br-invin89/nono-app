import View from './View'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '~/root/app/store/actions'
import * as ProfileActions from '../../store/actions' 

const mapStateToProps = state => ({
  app: state.app || {},
  auth: state.auth || {},
  profile: state.profile || {}
})

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch),
  profileActions: bindActionCreators(ProfileActions, dispatch)
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)
(View)
