"use strict";

var ProductItem = React.createClass({
    displayName: "ProductItem",
    render: function render() {
        return React.createElement(
            "li",
            { className: "product" },
            React.createElement("input", { className: "product-checkbox", type: "checkbox" }),
            React.createElement("img", { className: "product-img", src: this.props.img }),
            React.createElement(
                "p",
                { className: "product-title" },
                this.props.name
            ),
            React.createElement(
                "p",
                { className: "product-desc" },
                this.props.desc
            )
        );
    }
});