import {useState} from 'react'
import ReactDOM  from 'react-dom/client'
const courses=[
    {
        id:1,
        name:'ford'
    },
    {
        id:2,
        name:'toyota'
    },
    {
        id:3,
        name:'bmw'
    },
]
function Checkbox(){
    const [checked,setChecked]=useState()
    return(
       <>
        <div>
            {courses.map(course=>(
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checked===course.id}
                        onChange={()=>setChecked(course.id)}
                    />{course.name}
                </div>
            ))}
        </div>
       </>
    )
}

export default Checkbox