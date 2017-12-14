import React, { Component } from 'react';
import './Order.css';
import OrderItem from './OrderItem';

class Order extends Component {
  
  state = {
      agency: {
        name: 'XYZ',
        address: '7/5 Waine St',
        campaign: '2018'
      },
      product: {
        quantity: '150',
        size: 'A4',
        name: 'Satin Brochure',
      },
      status: false
    }

    toggleHandler = (event) => {
      const label = this.state.status;
      this.setState({
        status: !label
      })
    }

  render() {

    return (
      <div className="Order">
        <div className="Agency">
          <ul>
            <li>{this.state.agency.name}</li>
            <li>{this.state.agency.address}</li>
            <li>{this.state.agency.campaign}</li>
          </ul>
        </div>
        <OrderItem 
          click = {this.toggleHandler}
          product = {this.state.product}
          status = {this.state.status}
        />
      </div>
    );
  }
}

export default Order;