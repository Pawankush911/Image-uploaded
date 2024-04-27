//Only ingle images are supported
// import React, { useState } from 'react';

// const App= () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [error, setError] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
//         setError('Please select a JPEG or PNG file.');
//         setSelectedFile(null);
//       } else {
//         setSelectedFile(file);
//         setError('');
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       {selectedFile && (
//         <div>
//           <p>Selected file: {selectedFile.name}</p>
//           <p>File type: {selectedFile.type}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;



//multiple images uploaded to the one time

import React, { useState } from "react";

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      let isError = false;
      Array.from(files).forEach((file) => {
        if (!isValidFileType(file)) {
          isError = true;
        }
      });
      if (isError) {
        setError("Please select only valid file types (e.g., .jpg, .png).");
        setSelectedFiles(null);
      } else {
        setSelectedFiles(files);
        setError("");
      }
    }
  };

  const isValidFileType = (file) => {
    const allowedTypes = ["image/jpeg", "image/png"];
    return allowedTypes.includes(file.type);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />

      {error && <div style={{ color: "red" }}>{error}</div>}
      {selectedFiles && (
        <div>
          <h2>Selected files:</h2>
          <ul>
            {[...selectedFiles].map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
