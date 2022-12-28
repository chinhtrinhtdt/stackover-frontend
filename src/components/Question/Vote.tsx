import * as React from 'react';

function Count() {
    return (
        <>
            <div>
                <i className="bi bi-caret-up-fill "></i>
                <div>
                    220
                </div>
                <i className="bi bi-caret-up-fill"></i>
                <i className="bi bi-bookmark"></i>
                <i className="bi bi-arrow-clockwise"></i>
            </div>
        </>
    )
}
export default React.memo(Count)