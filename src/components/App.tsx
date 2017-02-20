import * as React from 'react';
import { observer } from 'mobx-react';
import { Store } from 'src/store';

export interface IAppProps {
    store: Store
}

@observer
export class App extends React.Component<IAppProps, void> {
    public render() {
        const { store } = this.props;
        return (
            <div>
                <h1>Hello React!</h1>
                <button onClick={() => store.increase()}>
                    The current count: {store.count}. Click to increase count by 1.
                </button>
            </div>
        );
    }
}
