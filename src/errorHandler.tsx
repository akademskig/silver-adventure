import React, { Component } from 'react'

export default class ErrorHandler extends Component {
    state = { error: null, errorInfo: null, hasError: false }

    componentDidCatch(error: Error, errorInfo: any) {
        this.setState({
            hasError: true, error, errorInfo
        })
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        //@ts-ignore
                        {this.state.error ? this.state.error.toString() : null}
                        <br />
                        //@ts-ignore
                        {this.state.errorInfo ? this.state.errorInfo.componentStack : null}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}