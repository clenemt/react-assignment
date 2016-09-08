"use strict";

var CustomerInfo = React.createClass({
    displayName: "CustomerInfo",
    render: function render() {
        return React.createElement(
            "div",
            { className: "customer-info" },
            React.createElement(
                "span",
                { className: "text-label" },
                "Aangevraagd om:"
            ),
            " ",
            this.props.orderDate,
            React.createElement(
                "span",
                { className: "text-label" },
                "Email:"
            ),
            " ",
            this.props.email,
            React.createElement(
                "span",
                { className: "text-label" },
                "Telefoon:"
            ),
            " ",
            this.props.tel
        );
    }
});