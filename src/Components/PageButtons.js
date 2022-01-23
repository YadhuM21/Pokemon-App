import React from 'react';

export default function PageButtons({toNxtPg , nxtUrl , toPrevPg , prevUrl}) {

    return (
        <div className='container d-flex justify-content-between my-3'>
            {(prevUrl) ? <button type="button" className="btn btn-primary buttonl shadow-none" onClick={toPrevPg}>Previous</button> : <button type="button" className="btn btn-dark buttonl shadow-none" onClick={toPrevPg} disabled>Previous</button> }
            {(nxtUrl) ? <button type="button" className="btn btn-primary buttonl shadow-none" onClick={toNxtPg}>Next</button> : <button type="button" className="btn btn-dark buttonl shadow-none" onClick={toNxtPg} disabled>Next</button> }
        </div>
    )
}

// export default PageButtons;

