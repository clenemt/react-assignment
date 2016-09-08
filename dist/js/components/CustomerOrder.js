"use strict";

var CustomerOrder = React.createClass({
    displayName: "CustomerOrder",
    render: function render() {
        var order = this.props.order,
            customer = order.customer;

        return React.createElement(
            "div",
            { className: "order" },
            React.createElement(NavBar, {
                title: customer.name,
                subtitle: customer.id,
                action: "print"
            }),
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
        );
    }
});