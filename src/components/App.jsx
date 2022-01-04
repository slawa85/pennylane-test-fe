import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const App = () => (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-3" style={{ overflow: 'scroll', height: '100vh', 'borderRight': '3px solid #ddd' }}>
                <LeftSide />
            </div>
            <div className="col-9" style={{ overflow: 'scroll', height: '100vh' }}>
                <RightSide />
            </div>
        </div>
    </div>
);

export default App;
