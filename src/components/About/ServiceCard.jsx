import React from 'react'
import {Link} from 'react-router-dom'

function ServiceCard({data}) {
    return (
        <div className="box br-large padding-small flex flex-column flex-space-evenly sc mb">
            {data.thumbnail && <img src={data.thumbnail} alt={data.title} className="my-2" style={{
                height: 'min-content'
            }} />}
            <h3 className="text-bold text-medium">{data.title}</h3>
            <p className="text-light text-xsmall mb">{data.description}</p>
            <div className="m-auto">
                <Link className="btn btn-primary" to={data.link} title="">ثبت نام</Link>
            </div>
        </div>
    )
}

export default ServiceCard
