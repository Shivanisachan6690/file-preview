import React from 'react';
import toast from 'react-hot-toast';

const FileManager = () => {

    const url = 'http://localhost:5000';

    const getFileDataFromBackend = () => {

    }

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append("myfile", file);
        fetch(url + "/util/uploadfile", {
          method: "POST",
          body: fd,
        }).then((res) => {
          if (res.status === 200) {
            toast.success("Image Uploaded!!", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          }
        });
      };

  return (
    <div className='container'>
        <div className="card">
            <div className="card-body">
                <input className='form-control' onChange={uploadFile} type="file" />
            </div>
        </div>
    </div>
  )
}

export default FileManager;