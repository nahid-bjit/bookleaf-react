// import React, { useState } from 'react';
// import { axiosInstance } from '../utils/axiosInstance'; // Import your Axios instance

// function FileUpload() {
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileChange = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };

//     const handleFileUpload = () => {
//         if (selectedFile) {
//             const formData = new FormData();
//             formData.append('file_to_upload', selectedFile);

//             axiosInstance
//                 .post('/files/upload-file', formData)
//                 .then((response) => {
//                     console.log('File uploaded successfully:', response.data);
//                     // You can handle the response data here as needed.
//                 })
//                 .catch((error) => {
//                     console.error('File upload failed:', error);
//                     // Handle the error here.
//                 });
//         } else {
//             console.error('No file selected');
//         }
//     };

//     return (
//         <div>
//             <h2>File Upload</h2>
//             <input type="file" accept=".jpg, .jpeg, .png, .txt" onChange={handleFileChange} />
//             <button onClick={handleFileUpload}>Upload</button>
//         </div>
//     );
// }

// export default FileUpload;
import React, { useState } from 'react';
import { axiosInstance } from '../utils/axiosInstance'; // Import your Axios instance

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file_to_upload', selectedFile);

            axiosInstance
                .post('/files/upload-file', formData)
                .then((response) => {
                    console.log('File uploaded successfully:', response.data);
                    // You can handle the response data here as needed.
                })
                .catch((error) => {
                    console.error('File upload failed:', error);
                    // Handle the error here.
                });
        } else {
            console.error('No file selected');
        }
    };

    return (
        <div>
            <h2>File Upload</h2>
            <input type="file" accept=".jpg, .jpeg, .png, .txt" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    );
}

export default FileUpload;
