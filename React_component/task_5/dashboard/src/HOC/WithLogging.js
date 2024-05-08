import React, {Component} from "react";

const WithLogging = (WrappedComponent) => {
    class WithLoggingComponent extends Component {
        componentDidMount() {
            console.log(`Component ${getDisplayName(WrappedComponent)} is mounted on componentDidMount()`);
          }
      
          componentWillUnmount() {
            console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount on componentWillUnmount()`);
          }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    WithLoggingComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

    return WithLoggingComponent;
};

const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default WithLogging