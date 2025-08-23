import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // 1. Import hook

function rent() {
  const { t } = useTranslation(); // 2. Initialize hook
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEquipments() {
      try {
        const res = await fetch("https://agrigrow-znib.onrender.com/api/equipment");
        const data = await res.json();
        setEquipments(data);
      } catch (err) {
        setEquipments([]);
      }
      setLoading(false);
    }
    fetchEquipments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 sm:pt-32 pb-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
        {t("rent_title")}
      </h1>

      {loading ? (
        <div className="text-center text-gray-500">{t("rent_loading")}</div>
      ) : equipments.length === 0 ? (
        <div className="text-center text-gray-500">
          {t("rent_no_equipment")}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Equipment Image */}
              <img
                src={`https://agrigrow-znib.onrender.com${item.imageUrl}`}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-gray-500 text-sm mb-1">
                  {t("rent_location")}
                  {item.location}
                </p>
                <p className="text-green-700 font-bold text-lg mb-4">
                  {t("rent_price")}
                  {item.pricePerDay}
                </p>

                <button className="mt-auto bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  {t("rent_button")}
                </button>

                {/* Certificate Image with Verified Badge */}
                {item.certificateUrl && (
                  <div className="mt-4 relative flex justify-center items-center">
                    <img
                      src={`https://agrigrow-znib.onrender.com${item.certificateUrl}`}
                      alt={`${item.name} Certificate`}
                      className="w-28 h-28 object-cover rounded border border-gray-200"
                    />
                    <span className="absolute bottom-1 right-1 bg-green-600 text-white text-xs px-2 py-1 rounded-full shadow flex items-center">
                      {t("rent_verified")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default rent;
