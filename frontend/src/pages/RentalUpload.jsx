import React, { useState } from "react";

function RentalUpload() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    pricePerDay: "",
    image: null,
    certificate: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [certificatePreview, setCertificatePreview] = useState(null);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
  if (e.target.type === "file") {
    const file = e.target.files[0];

    if (e.target.name === "image") {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else if (e.target.name === "certificate") {
      setFormData({ ...formData, certificate: file });
      setCertificatePreview(URL.createObjectURL(file));
    }

  } else {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("location", formData.location);
    data.append("pricePerDay", formData.pricePerDay);
    data.append("image", formData.image);
    data.append("certificate", formData.certificate);

    try {
      const res = await fetch("http://localhost:3000/api/equipment/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setMessage("Equipment uploaded successfully!");
        setFormData({
          name: "",
          description: "",
          location: "",
          pricePerDay: "",
          image: null,
          certificate: null,
        });
        setImagePreview(null);
      } else {
        setMessage("Upload failed.");
      }
    } catch {
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
          Upload Agricultural Equipment for Rental
        </h2>
        {message && (
          <div className="mb-4 text-center text-green-700 font-semibold">
            {message}
          </div>
        )}
        <label className="block mb-2 font-medium">Equipment Name</label>
        <input
          type="text"
          name="name"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label className="block mb-2 font-medium">Description</label>
        <textarea
          name="description"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <label className="block mb-2 font-medium">Location</label>
        <input
          type="text"
          name="location"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <label className="block mb-2 font-medium">Price Per Day (₹)</label>
        <input
          type="number"
          name="pricePerDay"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={formData.pricePerDay}
          onChange={handleChange}
          min="1"
          required
        />
        <label className="block mb-2 font-medium">Certificate Image</label>
        <input
          type="file"
          accept="image/*"
          className="w-full mb-4"
          onChange={handleChange}
          required
        />
        {certificatePreview && (
          <img
            src={certificatePreview}
            alt="certificatePreview"
            className="mb-4 w-32 h-32 object-cover rounded"
          />
        )}
        <label className="block mb-2 font-medium">Equipment Image</label>
        <input
          type="file"
          accept="image/*"
          className="w-full mb-4"
          onChange={handleChange}
          required
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mb-4 w-32 h-32 object-cover rounded"
          />
          
          
        )}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Upload Equipment
        </button>
      </form>
    </div>
  );
}

export default RentalUpload;