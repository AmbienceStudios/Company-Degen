// import { Upload } from "@aws-sdk/lib-storage";
// import { S3Client, S3 } from "@aws-sdk/client-s3";


import React from 'react'

function UploadPage() {

const upload = (file) => {
  console.log(file);

  return (
    <>
      <input type="file" onChange={upload}/>
    </>
  )
};
}

export default UploadPage