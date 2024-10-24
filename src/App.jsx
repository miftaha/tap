import { useState, useEffect } from 'react'
import JobInfo from './components/JobInfo'
import BtnContainer from './components/BtnContainer'
const url = 'https://www.course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className="container mx-auto my-20">
        <div className="w-24 h-24 rounded-full border-8 border-gray-500 border-t-blue-500 mx-auto my-0 animate-spin"></div>
      </section>
    )
  }
  return (
    <section className="max-w-[800px] mx-auto my-20">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}

export default App
