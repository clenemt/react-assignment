"use strict";

/* global React, NavBar, CustomerInfo, OrderInfo, ProductList */

var CustomerOrder = React.createClass({
    displayName: "CustomerOrder",
    // eslint-disable-line

    /**
     * The common render method.
     * This is the main react component aka the big view.
     */
    render: function render() {
        var order = this.props.order,
            customer = order.customer;

        return React.createElement(
            "div",
            { className: "order" },
            React.createElement(NavBar, {
                title: customer.name,
                subtitle: customer.id
            }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(CustomerInfo, {
                    orderDate: order.placedAt,
                    email: customer.email,
                    tel: customer.phoneNumber
                }),
                React.createElement(OrderInfo, {
                    status: order.status,
                    assignee: order.assignee.name,
                    assignedDate: order.assignedAt
                }),
                React.createElement(ProductList, { products: order.items })
            )
        );
    },


    propTypes: {
        order: React.PropTypes.object
    }
});