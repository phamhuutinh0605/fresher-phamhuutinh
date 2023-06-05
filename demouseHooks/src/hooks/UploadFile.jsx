import  { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const headers = {
          'Content-Type': selectedFile.type.replace(/------WebKitFormBoundary[^]+$/gm, ''),
        };
  
        const config = {
          method: 'post',
          url: '/upload',
          headers,
          data: formData,
        };
  
        const response = await axios(config);
  
        console.log('Tệp đã được tải lên thành công:', response.data);
      } catch (error) {
        console.error('Lỗi khi tải lên tệp:', error);
      }
    }
  };
  

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Tải lên</button>
    </div>
  );
};

export default UploadForm;
