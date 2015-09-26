App = React.createClass({
    sAlertWarning() {
        sAlert.warning('This is a warning', {effect: 'slide'});
    },
    sAlertSuccess() {
        sAlert.success('This is a success', {effect: 'slide'});
    },
    sAlertError() {
        sAlert.error('This is an error', {effect: 'slide'});
    },
    render() {
        return (
            <div>
                <button className="s-alert-trigger" onClick={this.sAlertWarning}>sAlert Warning</button>
                <button className="s-alert-trigger" onClick={this.sAlertSuccess}>sAlert Success</button>
                <button className="s-alert-trigger" onClick={this.sAlertError}>sAlert Error</button>
            </div>
        )
    }
});