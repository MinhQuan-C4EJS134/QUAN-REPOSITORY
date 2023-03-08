import {useState} from 'react'
import  ReactDOM  from 'react-dom/client'

const courses=[
    {id:1,
    name:'JAVA'
    },
    {id:2,
    name:'ruby'
    },
    {id:3,
    name:'ford'
    },
]


function Checkbox(){
    const[checked,setChecked]=useState()
    return(
        <>
        <div>
            {courses.map(course=>(
                <div key={course.id}>
                    <input
                        type="radio"
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