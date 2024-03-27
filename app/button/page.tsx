import React from 'react'
import { Button } from '@/components/ui/button'
export const ButtonPage = () => {
  return (
    <div className="text-black font-bold flex-1 flex flex-col 
     items-center min-h-screen w-full space-y-2 justify-center">


      <Button>default</Button>
      <Button variant='primary'>primary</Button>
      <Button variant='primaryOutline'>primary Outline</Button>

      <Button variant='secondary'>secondary</Button>
      <Button variant='secondaryOutline'>secondary Outline</Button>


      <Button variant='danger'>danger</Button>
      <Button variant='dangerOutline'>danger Outline</Button>
      
      <Button variant='super'>super</Button>
      <Button variant='superOutline'>super Outline</Button>

      <Button variant='ghost'>ghost</Button>

      <Button variant='sidebar'>sidebar</Button>
      <Button variant='sidebarOutline'>sidebar Outline</Button>

    </div>
  )
}

export default ButtonPage;