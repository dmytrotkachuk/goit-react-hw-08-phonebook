import React, { Component } from 'react'
import {connect} from 'react-redux'
import {contactsOperations, contactsSelectors} from '../redux/contacts'
import Logo from '../components/Logo/Logo'
import ContactForm from '../components/ContactForm/ContactForm'
import Filter from '../components/Filter/Filter'
import ContactList from '../components/ContactList/ContactList'


class ContactsView extends Component {
    componentDidMount(){
        this.props.onFetchContacts();
      }
    render(){
    return(
    <>
        <Logo name={'Phonebook'}/>
        <ContactForm/>
        <Filter/>
        <ContactList/>
    </>)}
}

const mapStateToProps = state => ({
    isLoadingContacts: contactsSelectors.getLoading(state) ,
  })
  
  const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
  }

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView)