/* global React, ProductItem */

var ProductList = React.createClass({ // eslint-disable-line

    /**
     * The common initial state method.
     */
    getInitialState () {
        return { items: this.props.products };
    },

    /**
     * Will update our items state array if something changed.
     * @param  {Number} id     - The item id.
     * @param  {String} status - The new item status.
     */
    handleStatusChange (id, status) {
        var items = this.state.items,
            index;

        index = items.findIndex((item) => {
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
    render () {
        // Loop over products to create the product items
        var items = this.state.items.map((item) => {
            return (
                <ProductItem
                    item={item}
                    key={item.id}
                    onStatusChange={this.handleStatusChange}
                />
            );
        });

        return (
            <ul className="product-list block">
                {items}
            </ul>
        );
    },

    propTypes: {
        products: React.PropTypes.array
    }
});
