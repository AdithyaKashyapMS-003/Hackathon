import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // 1. Import hook

function Rent() {
  const { t } = useTranslation(); // 2. Initialize hook
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEquipments() {
      try {
        const res = await fetch("http://localhost:3000/api/equipment");
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
    <div className="min-h-screen bg-green-50 py-10 pt-24">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        {t("rent_title")}
      </h1>
      {loading ? (
        <div className="text-center text-gray-600">{t("rent_loading")}</div>
      ) : equipments.length === 0 ? (
        <div className="text-center text-gray-600">
          {t("rent_no_equipment")}
        </div>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {equipments.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded shadow p-4 flex flex-col items-center"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-40 h-40 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-2">{item.description}</p>
              <p className="text-gray-600 mb-2">
                {t("rent_location", { location: item.location })}
              </p>
              <p className="text-green-700 font-bold mb-4">
                {t("rent_price", { price: item.pricePerDay })}
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                {t("rent_button")}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Rent;
