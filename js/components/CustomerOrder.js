var CustomerOrder = React.createClass({

    render() {
        var order = this.props.order,
            customer = order.customer;

        return (
            <div className="order">
                <NavBar
                  title={customer.name}
                  subtitle={customer.id}
                  action="print"
                />
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
        );
    }
});
