import JobDuties from './JobDuties'

/* eslint-disable react/prop-types */
const JobInfo = ({ jobs, currentItem }) => {
  const { title, dates, duties, company } = jobs[currentItem]
  return (
    <article>
      <h3 className="font-bold text-gray-400 text-3xl tracking-wide py-3">
        {title}
      </h3>
      <button className="bg-blue-200 text-black px-2 py-1 rounded-md">
        {company}
      </button>
      <p className="text-sm pt-3">{dates}</p>
      <JobDuties duties={duties} />
    </article>
  )
}

export default JobInfo
