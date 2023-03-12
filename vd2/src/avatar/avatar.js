import { useState } from "react"
import  ReactDOM  from "react-dom/client"



function Avatar(){
    const[avatar,setAvatar]=useState()
    const handlePreview=(e)=>{
            const file=e.target.files[0]
            file.preview=URL.createObjectURL(file)
            setAvatar(file)
    }
    return(
        <>
            <div>
                <input
                    type='file'
                    onChange={handlePreview}
                />
            </div>
            {avatar && <img src={avatar.preview} alt="" width='40%'/>}
            
            
        </>
            
    )
}

export default Avatar