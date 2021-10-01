import React from 'react'
import Band from './Band'

const Bands = (props) => {
    const renderBands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)
return (
    <div className='band-list'>
        {renderBands}
    </div>
)
}

export default Bands