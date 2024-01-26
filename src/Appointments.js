import React, {Component} from 'react'

export default class Appointments extends Component {
    
    constructor(props) {
        super(props)
        this.customersArray = props.customers
        //this.customersArray = props.customers...
        //same as saying its = [{array of objects}]
        console.log(this.customersArray)
    }

    /** Note: Feel free to copy/paste this into your Appointments.js for easier visibility.
 *
 * Goal: Create a table that renders allCustomers
 *
 * Step 1: Create a table with a thead/tbody. The thead should have a row with
 *         3 th elements: First Name, Last Name, and Appointment Time.
 * Step 2: Inside of your tbody, create a <tr> element that will .map()
 *         over this.customersArray and return
 *         3 <td> elements, one for firstName, lastName, and appointmentTime.
 *
 *         Check the README for a .map() hint.
 * Step 3: Style it with css using the App.css file!
 *
 */
    
    render() {
        return(
            <table>
                <thead className='titleHead'>
                    <tr>
                        <td>First Name -</td>
                        <td>Last Name -</td>
                        <td>Appointment Time</td>   
                    </tr>
                </thead>
                <tbody className='listBody'>
                    {this.customersArray.map((customer, index) => (
                    <tr key={index}>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.appointmentTime}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}