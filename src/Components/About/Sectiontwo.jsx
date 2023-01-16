import React from 'react'
import {aboutdata} from './data'

function Sectiontwo() {
  return (
    <div>
    {aboutdata.map(({title, description}, index) => {
        return (
            <div>
                <div>
                    <div>
                     <h1></h1>
                    <p></p>
                    </div>
                   <img src={} />

                 </div>
                <div> </div>
            </div>
        )
    })}

    </div>
  )
}

export default Sectiontwo