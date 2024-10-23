import React, { useState } from "react";
import { S3, PutObjectCommand } from "@aws-sdk/client-s3";

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setUploading(true);

    const s3Client = new S3({
      region: "blr1", 
      endpoint: "https://blr1.digitaloceanspaces.com", 
      credentials: {
        accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID || "DO00JMAAK77Y3LJLFLAD",
        secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY || "/VgFwR4MRkbJHQLk0ttVOD9M8G4V8JUGHqO4kuXL7do",
      },
    });

    const fileKey = `uploads/${file.name}`; 
    try {
      const command = new PutObjectCommand({
        Bucket: "sampark-2025", 
        Key: fileKey,
        Body: file,
        ContentType: file.type,
        ACL: "public-read", 
      });
      await s3Client.send(command);
      const fileUrl = `https://sampark-2025.blr1.digitaloceanspaces.com/${fileKey}`;
      setImageUrl(fileUrl);
    } catch (err) {
      console.error("Error uploading file:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload Image to DigitalOcean Space</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {imageUrl && (
        <div>
          <p>Image uploaded successfully:</p>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            {imageUrl}
          </a>
          <img src={imageUrl} alt="Uploaded" style={{ width: '300px', marginTop: '20px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
