import * as React from 'react';
import { Stack, Typography, Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const rendertime = (name: string, value: string) => {
    return (
        
        <div className='flex p-2'>

            <small className="text-muted p-2">{name} </small>
          
           {value} 
           
        </div>
    
    )
}
function TitlePart() {
    return (
        <>
            <div>
                <div className='d-flex'>
                <h2>
                    How to update dynamic multiple input (user can add those input themself)?
                </h2>
                <button type="button" className="btn btn-primary btn-ask"  >Ask Question</button>
                </div>
                <div className="d-flex flex-row mb-3">
                {rendertime("Asked ","today")}
                {rendertime("Modified ","today")}
                {rendertime("Viewed  ","22 times")}
                </div>
            </div>
        </>
    )
}
export default React.memo(TitlePart)