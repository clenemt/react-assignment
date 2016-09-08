var OrderInfo = React.createClass({

    render() {
        return (
            <div className="order-info">
                <p><span className="text-label">Status</span> {this.props.status}</p>
                <p><span className="text-label">Door</span> {this.props.assignee}</p>
                <p><span className="text-label">Om</span> {this.props.assignedDate}</p>
            </div>
        );
    }
});

