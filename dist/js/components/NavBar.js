"use strict";

/* global React */

var NavBar = React.createClass({
    displayName: "NavBar",
    // eslint-disable-line

    /**
     * The common render method.
     * In charge of displaying the top nav.
     */
    render: function render() {
        return React.createElement(
            "div",
            { className: "nav" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement("a", { href: "#", className: "nav-arrow arrow" }),
                React.createElement(
                    "h1",
                    { className: "nav-text" },
                    this.props.title
                ),
                React.createElement(
                    "span",
                    { className: "nav-subtext" },
                    this.props.subtitle
                ),
                React.createElement(
                    "button",
                    { className: "btn nav-btn" },
                    "Print"
                )
            )
        );
    },


    propTypes: {
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string
    }
});