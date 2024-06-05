import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="flex items-center justify-center absolute inset-0 bg-gray-900 bg-opacity-50 z-50">
      <BeatLoader color="#ffffff" size={50} />
    </div>
  )
}

export default Loading
