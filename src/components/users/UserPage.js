import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/userActions'
// import CatForm from './CatForm'
import { browserHistory } from 'react-router'
// import toastr from 'toastr'

class UserPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      user: this.props.user,
      saving: false,
      isEditing: false
    }

    this.redirect = this.redirect.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.user.id) {
      this.setState({user: nextProps.user})
    }

    this.setState({saving: false, isEditing: false})
  }

  toggleEdit() {
    this.setState({isEditing: true})
  }

  // updateCatState(event) {
  //   const field = event.target.name
  //   const cat = this.state.cat
  //   cat[field] = event.target.value
  //   return this.setState({cat: cat})
  // }
  //

  redirect() {
    browserHistory.push('/users')
  }

  render() {
    if (this.state.isEditing) {
      return (
      <div>
        <h1>edit user</h1>
      </div>
      )
    }
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.user.name}</h1>
      </div>
    )
  }
}


UserPage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  let user = {name: '', breed: '', weight: '', temperament: '', hobby_ids: []}
//   const catId = ownProps.params.id
//   if (catId && state.cats.length > 0 && state.hobbies.length > 0) {
//     cat = getCatById(state.cats, ownProps.params.id)
//     if (cat.id && cat.hobby_ids.length > 0) {
//       checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies, cat)
//       catHobbies = collectCatHobbies(stateHobbies, cat)
//     } else {
//       checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies)
//     }
//   }
  return { user: user }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

// connect:
// + will invoke mapDispatchToProps, with an argument of the store's dispatch function
// + it has access to the store, b/c you passed store in via the provider
// + bindActionCreators will take your collection of action creator functions
// + iterate over it, wrap each AC function in store.dispatch(AC function)
// + make them available to your component as this.props.actions = {name of an action: store.dispatch(ac function)}
