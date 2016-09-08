"use strict";

var NavBar = React.createClass({
    displayName: "NavBar",
    render: function render() {
        return React.createElement(
            "div",
            { className: "nav" },
            React.createElement(
                "span",
                { className: "nav-title" },
                this.props.title
            ),
            React.createElement(
                "span",
                { className: "nav-subtitle" },
                this.props.subtitle
            )
        );
    }
});