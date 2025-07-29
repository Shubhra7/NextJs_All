import React from 'react'

const page = async({params}) => {
    const {slug} = await params
  return (
    <div>
      <p>This profile is of: {slug}</p>
      {/* "slug" name is manditory for dynamic routing*/}
    </div>
  )
}

export default page
