/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'

const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div key={uuidv4()}>
            <p className="pt-3">{duty}</p>
          </div>
        )
      })}
    </div>
  )
}

export default JobDuties
