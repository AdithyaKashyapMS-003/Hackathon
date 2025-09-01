import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // 1. Import hook
import { API_BASE_URL } from "../config/api";

function RentalUpload() {
  const { t } = useTranslation(); // 2. Initialize hook
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
    const { name, type, files, value } = e.target;
    if (type === "file") {
      const file = files[0];
      if (name === "image") {
        setFormData({ ...formData, image: file });
        setImagePreview(URL.createObjectURL(file));
      } else if (name === "certificate") {
        setFormData({ ...formData, certificate: file });
        setCertificatePreview(URL.createObjectURL(file));
      }
    } else {
      setFormData({ ...formData, [name]: value });
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
      const res = await fetch(`${API_BASE_URL}/api/equipment/upload`, {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        // 3. Set message to a key instead of a raw string
        setMessage("upload_success");
        setFormData({
          name: "",
          description: "",
          location: "",
          pricePerDay: "",
          image: null,
          certificate: null,
        });
        setImagePreview(null);
        setCertificatePreview(null);
      } else {
        setMessage("upload_failed");
      }
    } catch {
      setMessage("upload_failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24 lg:pt-32 pb-8 flex justify-center items-start px-4">
      <div className="w-full max-w-2xl p-4 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
          {t("upload_title")}
        </h2>

        {message && (
          <div className="mb-4 text-center text-green-600 font-semibold text-sm sm:text-base">
            {t(message)}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
            {t("upload_label_name")}
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 p-2 sm:p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              {t("upload_label_desc")}
            </label>
            <textarea
              name="description"
              className="w-full border border-gray-300 p-2 sm:p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              {t("upload_label_location")}
            </label>
            <input
              type="text"
              name="location"
              className="w-full border border-gray-300 p-2 sm:p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              {t("upload_label_price")}
            </label>
            <input
              type="number"
              name="pricePerDay"
              className="w-full border border-gray-300 p-2 sm:p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
              value={formData.pricePerDay}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              {t("upload_label_cert")}
            </label>
            <input
              type="file"
              name="certificate"
              accept="image/*"
              onChange={handleChange}
              className="mb-2"
              required
            />
            {certificatePreview && (
              <img
                src={certificatePreview}
                alt="Certificate Preview"
                className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow-sm"
              />
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              {t("upload_label_image")}
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="mb-2"
              required
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Equipment Preview"
                className="w-32 h-32 object-cover rounded-xl border border-gray-200 shadow-sm"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200 shadow-lg text-sm sm:text-base"
          >
            {t("upload_button")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RentalUpload;
