import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-[1000]">
      <BeatLoader color="#ffffff" size={50} />
    </div>
  )
}

export default Loading
