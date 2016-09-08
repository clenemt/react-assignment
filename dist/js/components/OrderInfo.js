"use strict";

var OrderInfo = React.createClass({
    displayName: "OrderInfo",
    render: function render() {
        return React.createElement(
            "div",
            { className: "order-info" },
            React.createElement(
                "p",
                null,
                React.createElement(
                    "span",
                    { className: "text-label" },
                    "Status"
                ),
                " ",
                this.props.status
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "span",
                    { className: "text-label" },
                    "Door"
                ),
                " ",
                this.props.assignee
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "span",
                    { className: "text-label" },
                    "Om"
                ),
                " ",
                this.props.assignedDate
            )
        );
    }
});