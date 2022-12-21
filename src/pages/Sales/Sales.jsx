import React from 'react'
import { useParams } from 'react-router-dom'
const Sales = () => {
    const { id } = useParams()
  return (
    <div>Sales - {id}</div>
  )
}

export default Sales