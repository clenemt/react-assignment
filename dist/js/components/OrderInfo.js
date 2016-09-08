'use strict';

/* global React */

var OrderInfo = React.createClass({
    displayName: 'OrderInfo',
    // eslint-disable-line

    /**
     * The common render method.
     * In charge of displaying the order status.
     */
    render: function render() {
        var assignedDate = new Date(Date.parse(this.props.assignedDate));

        /** Format passed date as `hh:mm (dd-MM-YYYY)` */
        function formatTime(date) {
            var mm = '' + date.getMinutes();
            return date.getHours() + ':' + (!mm[1] ? '0' : '') + mm;
        }

        function formatDate(date) {
            var MM = date.getMonth() + 1 + '',
                dd = '' + date.getDate(),
                YYYY = date.getFullYear();

            return '(' + (!dd[1] ? '0' : '') + dd + '-' + (!MM[1] ? '0' : '') + MM + '-' + YYYY + ')';
        }

        return React.createElement(
            'div',
            { className: 'order-info grid block' },
            React.createElement(
                'div',
                { className: 'unit one-third' },
                React.createElement(
                    'p',
                    { className: 'text text-label' },
                    'Status'
                ),
                React.createElement(
                    'p',
                    { className: 'text order-status' },
                    this.props.status === 'INPROGRESS' ? 'In behandeling' : this.props.status
                )
            ),
            React.createElement(
                'div',
                { className: 'unit one-third' },
                React.createElement(
                    'p',
                    { className: 'text text-label' },
                    'Door'
                ),
                React.createElement(
                    'p',
                    { className: 'text' },
                    this.props.assignee
                )
            ),
            React.createElement(
                'div',
                { className: 'unit one-third' },
                React.createElement(
                    'p',
                    { className: 'text text-label' },
                    'Om'
                ),
                React.createElement(
                    'p',
                    { className: 'text' },
                    formatTime(assignedDate),
                    ' ',
                    React.createElement(
                        'span',
                        { className: 'text-help' },
                        formatDate(assignedDate)
                    )
                )
            )
        );
    },


    propTypes: {
        status: React.PropTypes.string,
        assignee: React.PropTypes.string,
        assignedDate: React.PropTypes.string
    }
});