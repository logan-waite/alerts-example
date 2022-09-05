/** @jsxImportSource @emotion/react */

import {Alert as MUIAlert, AlertTitle} from '@mui/material';

export function Alert({id, text, link, alertTitle, alertType}) {
    function handleClick() {
        if (link && (!link.includes('http://') && !link.includes('https://'))) {
            link = 'https://' + link
        }
        window.open(link)
    }

    return (
        <MUIAlert variant="filled" severity={alertType} css={alertStyles} onClick={handleClick}>
            <AlertTitle>{alertTitle}</AlertTitle>
            {text}
        </MUIAlert>
    );
}

const alertStyles = {
    margin: '10px',
}