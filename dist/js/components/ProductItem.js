'use strict';

/* global React */

var ProductItem = React.createClass({
    displayName: 'ProductItem',
    // eslint-disable-line

    /**
     * When the checkbox is clicked will call `onStatusChange` from the parent.
     */
    handleChange: function handleChange() {
        this.props.onStatusChange(this.props.item.id, this.refs.checkbox.checked ? 'RESERVED' : 'NEW');
    },


    /**
     * Prevent selecting image.
     */
    preventSelection: function preventSelection(evt) {
        evt.preventDefault();
    },


    /**
     * The common render method.
     * In charge of displaying a single product item.
     */
    render: function render() {
        var item = this.props.item,
            detail = item.product;

        return React.createElement(
            'li',
            { className: 'product' },
            React.createElement(
                'label',
                { className: 'product-img custom-checkbox', onMouseDown: this.preventSelection },
                React.createElement('input', {
                    className: 'product-input',
                    type: 'checkbox',
                    checked: item.status !== 'NEW',
                    onChange: this.handleChange,
                    ref: 'checkbox'
                }),
                React.createElement('span', { className: 'custom-checkbox-indicator' }),
                React.createElement('img', { src: detail.imageUrl })
            ),
            React.createElement(
                'a',
                { href: '#', className: 'product-desc' },
                React.createElement('span', { className: 'product-arrow arrow' }),
                React.createElement(
                    'div',
                    { className: 'bfc' },
                    React.createElement(
                        'h3',
                        { className: 'product-title text' },
                        detail.name
                    ),
                    React.createElement(
                        'p',
                        { className: 'text-help text' },
                        detail.description
                    )
                )
            )
        );
    },


    propTypes: {
        item: React.PropTypes.object,
        onStatusChange: React.PropTypes.func
    }
});