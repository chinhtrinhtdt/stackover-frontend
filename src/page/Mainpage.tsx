import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import TitlePart from './TitlePart';
import Count from './Count';
import Maincontent from './Maincontent';
import Itemright from './Itemright';

export default function Mainpage() {
    return (
        <>
            <Stack width={"80%"} margin={"0 auto"} marginTop="30px">
                <TitlePart />
                <hr />
                <div className='d-flex'>
                    <div className="p-2 w-32 ">
                        <Count/>
                    </div>
                    <div className="p-2 w-32">
                        <Maincontent/>
                    </div>
                    <div className="p-2 w-32">
                        <Itemright/>
                    </div>
                </div>
            </Stack>
        </>
    )
}
