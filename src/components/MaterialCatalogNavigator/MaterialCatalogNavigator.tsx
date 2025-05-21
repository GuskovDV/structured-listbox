import React, { useMemo, useState } from "react";
import styles from "./styles";
import { materialDataConcrete } from "./demoDataConcrete";

export interface Material {
  id: number;
  type: string;
  strengthClass: string;
  name: string;
  standard: string;
  unit: string;
  description: string;
}

const highlightMatch = (text: string, query: string): React.ReactNode => {
  if (!query) return text;
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const startIndex = lowerText.indexOf(lowerQuery);
  if (startIndex === -1) return text;
  const endIndex = startIndex + lowerQuery.length;

  return (
    <>
      {text.substring(0, startIndex)}
      <mark style={{ backgroundColor: "#ffe58f", padding: 0 }}>
        {text.substring(startIndex, endIndex)}
      </mark>
      {text.substring(endIndex)}
    </>
  );
};

const MaterialCatalogNavigator: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  const types = useMemo(() => {
    return Array.from(new Set(materialDataConcrete.map((m) => m.type)));
  }, []);

  const strengthClasses = useMemo(() => {
    return selectedType
      ? Array.from(
          new Set(
            materialDataConcrete
              .filter((m) => m.type === selectedType)
              .map((m) => m.strengthClass)
          )
        )
      : [];
  }, [selectedType]);

  const filteredItems = useMemo(() => {
    const lower = search.trim().toLowerCase();

    const match = (text: string) => text.toLowerCase().includes(lower);

    const base = materialDataConcrete.filter(
      (m) =>
        (!selectedType || m.type === selectedType) &&
        (!selectedClass || m.strengthClass === selectedClass)
    );

    if (!lower) return base;

    return base.filter(
      (m) => match(m.name) || match(m.description)
    );
  }, [search, selectedType, selectedClass]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.sidebar}>
        <label style={styles.label}>Тип бетона</label>
        <select
          style={styles.select}
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
            setSelectedClass("");
            setSelectedMaterial(null);
          }}
        >
          <option value="">Все типы</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label style={{ ...styles.label, marginTop: "16px" }}>Класс прочности</label>
        <select
          style={styles.select}
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.target.value);
            setSelectedMaterial(null);
          }}
          disabled={!selectedType}
        >
          <option value="">Все классы</option>
          {strengthClasses.map((sc) => (
            <option key={sc} value={sc}>
              {sc}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.content}>
        <input
          type="text"
          placeholder="🔍 Поиск по наименованию..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedMaterial(null);
          }}
          style={styles.searchInput}
        />

        <ul style={styles.resultList}>
          {filteredItems.map((m) => (
            <li
              key={m.id}
              onClick={() => setSelectedMaterial(m)}
              style={{
                ...styles.resultItem,
                backgroundColor:
                  selectedMaterial?.id === m.id ? "#eef6ff" : "transparent",
              }}
            >
              <strong>{highlightMatch(m.name, search)}</strong>
              <div style={styles.meta}>
                {m.type} / {m.strengthClass}
              </div>
            </li>
          ))}
          {filteredItems.length === 0 && (
            <li style={styles.noResult}>Ничего не найдено</li>
          )}
        </ul>

        <div style={styles.detailsBox}>
          {selectedMaterial ? (
            <>
              <h4 style={styles.detailsTitle}>{selectedMaterial.name}</h4>
              <div style={styles.metaSmall}>
                {selectedMaterial.type} / {selectedMaterial.strengthClass}
              </div>
              <p style={styles.description}><b>ГОСТ:</b> {selectedMaterial.standard}</p>
              <p style={styles.description}><b>Ед. изм.:</b> {selectedMaterial.unit}</p>
              <p style={styles.description}>{selectedMaterial.description}</p>
            </>
          ) : (
            <>
              <h4 style={styles.detailsTitle}>Описание материала</h4>
              <p style={styles.description}>
                Выберите материал слева, чтобы увидеть его характеристики и область применения.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialCatalogNavigator;

