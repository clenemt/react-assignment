'use strict';

/* global React */

var CustomerInfo = React.createClass({
    displayName: 'CustomerInfo',
    // eslint-disable-line

    /**
     * The common render method.
     * In charge of displaying the customer infos.
     */
    render: function render() {
        var stringDate = formatDate(this.props.orderDate);

        /** Format passed date as `hh:mm (dd-MM-YYYY)` */
        function formatDate(date) {

            // The 2 lines below are needed for ios
            // since new Date(this.props.orderDate) fails on ios
            // with the provided data.json date format
            var arr = date.split(/[- :]/);
            date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4]);

            var MM = date.getMonth() + 1 + '',
                dd = '' + date.getDate(),
                mm = '' + date.getMinutes(),
                hh = date.getHours(),
                YYYY = date.getFullYear();

            return hh + ':' + (!mm[1] ? '0' : '') + mm + ' (' + (!dd[1] ? '0' : '') + dd + '-' + (!MM[1] ? '0' : '') + MM + '-' + YYYY + ')';
        }

        return React.createElement(
            'div',
            { className: 'customer-info block' },
            React.createElement(
                'p',
                { className: 'text' },
                React.createElement(
                    'span',
                    { className: 'text-label' },
                    'Aangevraagd om:'
                ),
                ' ',
                stringDate
            ),
            React.createElement(
                'p',
                { className: 'text' },
                React.createElement(
                    'span',
                    { className: 'text-label' },
                    'Email:'
                ),
                ' ',
                this.props.email
            ),
            React.createElement(
                'p',
                { className: 'text' },
                React.createElement(
                    'span',
                    { className: 'text-label' },
                    'Telefoon:'
                ),
                ' ',
                this.props.tel
            )
        );
    },


    propTypes: {
        orderDate: React.PropTypes.string,
        email: React.PropTypes.string,
        tel: React.PropTypes.string
    }
});