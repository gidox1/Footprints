import React from 'react';
// import {useForm, } from 'react-hook-form';

let fileUpload = React.createRef();

function showFileUpload() {
    // fileUpload.current.click();
    document.getElementById('id').addEventListener('click', (e) => {
        
    })
}

function InputComponent () {
    
    const onSubmit = (data) => {
        console.log(data, "DD")
    }
    const {register, handleSubmit, errors} = useForm();

    return (
        <form method="post" action="/" encType="multipart/form-data">
        <div className="InputComponent">
            <textarea type="text" class="form-control" aria-label="With textarea" name="body_" ref={register} rows="5"></textarea>
            <label htmlFor="id">
                <input type="file" id="my_file" style={{ display: "none" }} id="id" name="file" ref={register} ref={fileUpload}/>
                <img 
                    src="https://res.cloudinary.com/passionpolisapi/image/upload/v1596379036/appImages/6362998_preview_smgpbx.png"
                    className="uploadImg"
                    // onClick={showFileUpload}
                    name="image"
                />
            </label>
            <button type="button" class="btn btn-success custonBtn" onClick={handleSubmit(onSubmit)}>Success</button>
        </div>
    </form>
    )
}


export default InputComponent;