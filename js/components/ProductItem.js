var ProductItem = React.createClass({

    render() {
        return (
            <li className="product">
                <input className="product-checkbox" type="checkbox" />
                <img className="product-img" src={this.props.img} />
                <p className="product-title">{this.props.name}</p>
                <p className="product-desc">{this.props.desc}</p>
            </li>
        );
    }
});
