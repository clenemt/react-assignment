var NavBar = React.createClass({

    render() {
        return (
            <div className="nav">
                <span className="nav-title">{this.props.title}</span>
                <span className="nav-subtitle">{this.props.subtitle}</span>
            </div>
        );
    }
});
