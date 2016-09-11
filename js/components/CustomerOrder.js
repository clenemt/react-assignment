import React from 'react';
import NavBar from './NavBar';
import CustomerInfo from './CustomerInfo';
import OrderInfo from './OrderInfo';
import ProductList from './ProductList';

class CustomerOrder extends React.Component {

    /**
     * The common render method.
     * This is the main react component aka the big view.
     */
    render () {
        var order = this.props.order,
            customer = order.customer;

        return (
            <div className="order">
                <NavBar
                  title={customer.name}
                  subtitle={customer.id}
                />

                <div className="container">
                    <CustomerInfo
                      orderDate={order.placedAt}
                      email={customer.email}
                      tel={customer.phoneNumber}
                    />
                    <OrderInfo
                      status={order.status}
                      assignee={order.assignee.name}
                      assignedDate={order.assignedAt}
                    />
                    <ProductList products={order.items} />
                </div>
            </div>
        );
    }
}

CustomerOrder.propTypes = {
    order: React.PropTypes.object
};

export default CustomerOrder;
