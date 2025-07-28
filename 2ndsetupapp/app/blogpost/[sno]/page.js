import React from 'react'

const page = async({params}) => {
    const {sno} = params
  return (
    <div>
      <p>This profile is of: {sno}</p>
      {/* "sno" name is manditory for dynamic routing*/}
    </div>
  )
}

export default page
