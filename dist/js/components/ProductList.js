"use strict";

/* global React, ProductItem */

var ProductList = React.createClass({
    displayName: "ProductList",
    // eslint-disable-line

    /**
     * The common initial state method.
     */
    getInitialState: function getInitialState() {
        return { items: this.props.products };
    },


    /**
     * Will update our items state array if something changed.
     * @param  {Number} id     - The item id.
     * @param  {String} status - The new item status.
     */
    handleStatusChange: function handleStatusChange(id, status) {
        var items = this.state.items,
            index;

        index = items.findIndex(function (item) {
            return item.id === id;
        });

        if (index !== -1 && items[index].status !== status) {
            items[index].status = status;
            this.setState({ items: items });
        }
    },


    /**
     * The common render method.
     * In charge of displaying a list of items.
     */
    render: function render() {
        var _this = this;

        // Loop over products to create the product items
        var items = this.state.items.map(function (item) {
            return React.createElement(ProductItem, {
                item: item,
                key: item.id,
                onStatusChange: _this.handleStatusChange
            });
        });

        return React.createElement(
            "ul",
            { className: "product-list block" },
            items
        );
    },


    propTypes: {
        products: React.PropTypes.array
    }
});