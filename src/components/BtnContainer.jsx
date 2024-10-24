/* eslint-disable react/prop-types */
const BtnContainer = ({ jobs, setCurrentItem, currentItem }) => {
  return (
    <div className="flex items-center gap-3 mb-3">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrentItem(index)}
            className={
              index === currentItem
                ? 'text-black px-2 py-1 rounded-md border-4 border-blue-800'
                : 'text-white px-2 py-1 rounded-md bg-blue-500'
            }
          >
            {job.company}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
