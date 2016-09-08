/* global React */

var NavBar = React.createClass({ // eslint-disable-line

    /**
     * The common render method.
     * In charge of displaying the top nav.
     */
    render () {
        return (
            <div className="nav">
                <div className="container">
                    <a href="#" className="nav-arrow arrow"></a>
                    <h1 className="nav-text">{this.props.title}</h1>
                    <span className="nav-subtext">{this.props.subtitle}</span>
                    <button className="btn nav-btn">Print</button>
                </div>
            </div>
        );
    },

    propTypes: {
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string
    }
});
