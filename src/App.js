

import React, { useState } from "react";

const App = () => {
  // const [files, setFiles] = useState( );
  const[imageFile,setImageFile] = useState([])
  const[pdfFile,setPDFFile] = useState([])

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    // console.log(selectedFiles);
    //  setFiles(selectedFiles)

    if (selectedFiles.length >= 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        var file = selectedFiles[i];
        if (file.type === "application/pdf") {
          setPDFFile(pdfFile.push(file))
          console.log(imageFile, "ddd");
        } else if (file.type === "image/png" || file.type === "image/jpeg") {
          setImageFile(imageFile.push(file))
          console.log(pdfFile, "hhhh");
        } else {
          alert("Please select the image and pdf file");
        }
      }
    }
  }
  const Submit=()=>{

    if(pdfFile.length===0){
      alert("All image file uploaded successfully")

    }else if(imageFile.length===0){
      alert("All pdf file uploaded successfully")
      

    }else if (pdfFile.length > imageFile.length) {
      alert(
        "please select only pdf files because maximum file size is " +
          pdfFile.length
      );
    } else if (imageFile.length > pdfFile.length) {
      alert(
        "please select only image files because maximum file size is " +
          imageFile.length
      );
    } else if (imageFile.length === pdfFile.length) {
      alert(
        "please select any one type files because pdf and image file size is equal "
      );
    };

  }
    
  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={Submit}>Submit</button>
    </div>
  );
};

export default App;
