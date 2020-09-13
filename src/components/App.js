import React, {Component, Suspense} from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import contactsOperations from '../redux/contacts/contactsOperations'
import contactsSelectors from '../redux/contacts/contactsSelectors'
import Layout from './Layout/Layout'
// import Appbar from './Appbar/Appbar'
// import ContactsView from '../views/ContactsView'
import routes from '../routes'
// import Filter from './Filter/Filter'

class App  extends Component {

 
  render(){
    return (
      <BrowserRouter>
      <Suspense fallback={<h1>LOADING...</h1>}>
      <Layout>
      {this.props.isLoadingContacts && <h1> LOADING...</h1>}
      <Switch>
        {routes.map(route => <Route key={route.path} {...route}/>)}
      </Switch>
      </Layout>
      </Suspense>
    </BrowserRouter>
  )}
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state) ,
})

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
