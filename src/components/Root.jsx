import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export const Root = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
