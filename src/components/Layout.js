import { AppBar } from '@material-ui/core'
import React from 'react'
import CustomDrawer from'./TemporaryDrawer'


export default function Layout({ children }) {
  return (
    <div display='flex'>
        <CustomDrawer>
            
        </CustomDrawer>
        {children}
    </div>
  )
}
