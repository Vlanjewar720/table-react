import React from 'react'
import Personchild from './Personchild'
import Demo from './Demo'



 function Main_parent() {
  return (
    <div>
         <Demo name="i am good" />
        < Personchild name="Vaibhav "/>
         {/* <Demo name="i am good"/>
        < Personchild name="Munna Lanjewar"/>
         <Demo name="i am fine"/>
        < Personchild name="Dhavan Lanjewar"/> */}
    </div>
  )
}
export default Main_parent;