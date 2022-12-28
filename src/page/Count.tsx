import * as React from 'react';
import { Stack, Typography, Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { faB, faCheckSquare, faCoffee, faDatabase, faHouseLaptop, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
// library.add(faB, faS, faHouseLaptop, faCheckSquare, faCoffee, faDatabase, faWindowMaximize)

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