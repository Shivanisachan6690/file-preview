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
            fetch(url+'/file/add', {
              method: 'POST',
              body : JSON.stringify({
                
              })
            })
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
                <br />
                <div class="container text-center">
                <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        <button type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Add</button>
        <button type="button" class="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark">Delete</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a short card.This is a longer card with supporting text below as a natural lead-in to
          additional content.</p>
        <button type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Add</button>
        <button type="button" class="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark">Delete</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text"> This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content.</p>
     
        <button type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark"  >Add</button>
        <button type="button" class="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark">Delete</button> </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        <button type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Add</button>
        <button type="button" class="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark">Delete</button>
      </div>
    </div>
  </div>
</div>
</div>
            </div>
        </div>
    </div>
  )
}

export default FileManager