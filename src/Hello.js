
// FileUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const Hello= () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:3300/upload', formData);
      console.log('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Hello;
{/*function Hello(){
{/*const [users,setData]=useState(null)
useEffect(()=>{
  fetch("https://json.placeholder.typicode.com/Users")
  .then((res)=>res.json())
  .then(data=>setData(data))
  .catch((err)=>{
    console.log(err);
  });
},[])
return(
  
  <div>
 <ul>{users && users.map((user,index)=>(
  <li key={index}>{user.name}</li>
 ))}</ul>
  
 </div>
 
)
}
export default Hello;*/}