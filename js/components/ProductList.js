var ProductList = React.createClass({

    render() {
        var items = this.props.products.map((prod) => {
            return (
                <ProductItem
                    name={prod.product.name}
                    desc={prod.product.description}
                    img={prod.product.imageUrl}
                />
            );
        });

        return (
            <ul className="product-list">
                {items}
            </ul>
        );
    }
});
