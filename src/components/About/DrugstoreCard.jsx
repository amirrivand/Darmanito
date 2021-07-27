import React from 'react'

function DrugstoreCard({name, des, daynight=false, opacity}) {
    return (
        <div className="ds-card" style={opacity && {opacity: opacity}}>
            <div className="icon bg-primary"></div>
            <div className="flex flex-space-between flex-column">
                <strong className="text-medium">{name}</strong>
                <span className="text-xxsmall pin">{des}</span>
            </div>
            {daynight && <span className="daynight bg-primary text-xxsmall">شبانه روزی</span>}
        </div>
    )
}

export default DrugstoreCard
