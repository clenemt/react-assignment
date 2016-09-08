var CustomerInfo = React.createClass({

    render() {
        return (
            <div className="customer-info">
                <span className="text-label">Aangevraagd om:</span> {this.props.orderDate}
                <span className="text-label">Email:</span> {this.props.email}
                <span className="text-label">Telefoon:</span> {this.props.tel}
            </div>
        );
    }
});
