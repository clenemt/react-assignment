/* global React */

var OrderInfo = React.createClass({ // eslint-disable-line

    /**
     * The common render method.
     * In charge of displaying the order status.
     */
    render () {
        var assignedDate = parseDate(this.props.assignedDate);

        function parseDate (date) {
            // The 2 lines below are needed for ios
            // since new Date(this.props.orderDate) fails on ios
            // with the provided data.json date format
            var arr = date.split(/[- :]/);
            return new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4]);
        }

        /** Format passed date as `hh:mm (dd-MM-YYYY)` */
        function formatTime (date) {
            var mm = '' + date.getMinutes();
            return `${date.getHours()}:${!mm[1] ? '0':''}${mm}`;
        }

        function formatDate (date) {
            var MM = date.getMonth() + 1 + '',
                dd = '' + date.getDate(),
                YYYY = date.getFullYear();

            return `(${!dd[1] ? '0':''}${dd}-${!MM[1] ? '0':''}${MM}-${YYYY})`;
        }

        return (
            <div className="order-info grid block">
                <div className="unit one-third">
                    <p className="text text-label">Status</p>
                    <p className="text order-status">{this.props.status === 'INPROGRESS' ? 'In behandeling' : this.props.status}</p>
                </div>
                <div className="unit one-third">
                    <p className="text text-label">Door</p>
                    <p className="text">{this.props.assignee}</p>
                </div>
                <div className="unit one-third">
                    <p className="text text-label">Om</p>
                    <p className="text">{formatTime(assignedDate)} <span className="text-help">{formatDate(assignedDate)}</span></p>
                </div>
            </div>
        );
    },

    propTypes: {
        status: React.PropTypes.string,
        assignee: React.PropTypes.string,
        assignedDate: React.PropTypes.string
    }
});

