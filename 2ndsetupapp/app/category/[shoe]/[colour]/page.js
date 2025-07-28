import React from 'react'

const page = async({params}) => {
    const {shoe, colour} = await params
  return (
    <div>
      <h1>The shoe: {shoe}</h1>
      <h2>The colour: {colour}</h2>
    </div>
  )
}

export default page
