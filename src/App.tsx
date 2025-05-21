import React, { useState } from "react";
import StructuredListBoxNavigator from "./components/StructuredListBoxNavigator/StructuredListBoxNavigator";
import MaterialCatalogNavigator from "./components/MaterialCatalogNavigator/MaterialCatalogNavigator";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"constructives" | "materials">("constructives");

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "16px" }}>Навигация по справочникам</h1>

      <div style={{ marginBottom: "24px" }}>
        <button
          onClick={() => setActiveTab("constructives")}
          style={{
            marginRight: "12px",
            padding: "8px 16px",
            backgroundColor: activeTab === "constructives" ? "#007bff" : "#e0e0e0",
            color: activeTab === "constructives" ? "#fff" : "#333",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Конструктивные элементы
        </button>
        <button
          onClick={() => setActiveTab("materials")}
          style={{
            padding: "8px 16px",
            backgroundColor: activeTab === "materials" ? "#007bff" : "#e0e0e0",
            color: activeTab === "materials" ? "#fff" : "#333",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Каталог материалов
        </button>
      </div>

      {activeTab === "constructives" && <StructuredListBoxNavigator />}
      {activeTab === "materials" && <MaterialCatalogNavigator />}
    </div>
  );
};

export default App;