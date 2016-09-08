/* global React */

var CustomerInfo = React.createClass({ // eslint-disable-line

    /**
     * The common render method.
     * In charge of displaying the customer infos.
     */
    render () {
        var date = new Date(Date.parse(this.props.orderDate)),
            stringDate = formatDate(date);

        /** Format passed date as `hh:mm (dd-MM-YYYY)` */
        function formatDate (date) {
            var MM = date.getMonth() + 1 + '',
                dd = '' + date.getDate(),
                mm = '' + date.getMinutes(),
                hh = date.getHours(),
                YYYY = date.getFullYear();

            return `${hh}:${!mm[1] ? '0':''}${mm} (${!dd[1] ? '0':''}${dd}-${!MM[1] ? '0':''}${MM}-${YYYY})`;
        }

        return (
            <div className="customer-info block">
                <p className="text">
                    <span className="text-label">Aangevraagd om:</span> {stringDate}
                </p>
                <p className="text">
                    <span className="text-label">Email:</span> {this.props.email}
                </p>
                <p className="text">
                    <span className="text-label">Telefoon:</span> {this.props.tel}
                </p>
            </div>
        );
    },

    propTypes: {
        orderDate: React.PropTypes.string,
        email: React.PropTypes.string,
        tel: React.PropTypes.string
    }
});
