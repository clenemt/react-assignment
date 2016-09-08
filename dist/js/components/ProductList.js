"use strict";

var ProductList = React.createClass({
    displayName: "ProductList",
    render: function render() {
        var items = this.props.products.map(function (prod) {
            return React.createElement(ProductItem, {
                name: prod.product.name,
                desc: prod.product.description,
                img: prod.product.imageUrl
            });
        });

        return React.createElement(
            "ul",
            { className: "product-list" },
            items
        );
    }
});