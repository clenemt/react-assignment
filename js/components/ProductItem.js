/* global React */

var ProductItem = React.createClass({ // eslint-disable-line

    /**
     * When the checkbox is clicked will call `onStatusChange` from the parent.
     */
    handleChange () {
        this.props.onStatusChange(
            this.props.item.id,
            this.refs.checkbox.checked ? 'RESERVED' : 'NEW'
        );
    },

    /**
     * Prevent selecting image.
     */
    preventSelection (evt) {
        evt.preventDefault();
    },

    /**
     * The common render method.
     * In charge of displaying a single product item.
     */
    render () {
        var item = this.props.item,
            detail = item.product;

        return (
            <li className="product">
                <label className="product-img custom-checkbox" onMouseDown={this.preventSelection}>
                    <input
                        className="product-input"
                        type="checkbox"
                        checked={item.status !== 'NEW'}
                        onChange={this.handleChange}
                        ref="checkbox"
                    />
                    <span className="custom-checkbox-indicator"></span>
                    <img src={detail.imageUrl} />
                </label>

                <a href="#" className="product-desc">
                    <span className="product-arrow arrow"></span>
                    <div className="bfc">
                        <h3 className="product-title text">{detail.name}</h3>
                        <p className="text-help text">{detail.description}</p>
                    </div>
                </a>
            </li>
        );
    },

    propTypes: {
        item: React.PropTypes.object,
        onStatusChange: React.PropTypes.func
    }
});
