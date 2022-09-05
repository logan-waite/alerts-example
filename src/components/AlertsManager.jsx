/** @jsxImportSource @emotion/react */

import { Alert } from './Alert';

export function AlertsManager({alerts}) {
    return (
        <div css={wrapperStyles}>
            {alerts.map((a) => <Alert {...a} key={a.id}/>)}
        </div>
    )
}

const wrapperStyles = {
    position: 'absolute',
    right: 0,
    top: 0,
    margin: '10px',
    width: '300px',
}