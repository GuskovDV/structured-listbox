import React, { useMemo, useState } from "react";
import styles from "./styles";
import { flatItems, FlatItem } from "./demoData";

// 🔍 Подсветка совпадения
const highlightMatch = (text: string, query: string): React.ReactNode => {
  if (!query) return text;
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const startIndex = lowerText.indexOf(lowerQuery);
  if (startIndex === -1) return text;
  const endIndex = startIndex + query.length;

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

const StructuredListBoxNavigator: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedDirection, setSelectedDirection] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<FlatItem | null>(null);

  const directions = useMemo(
    () => Array.from(new Set(flatItems.map((i) => i.direction))),
    []
  );

  const groups = useMemo(() => {
    return selectedDirection
      ? Array.from(
          new Set(
            flatItems
              .filter((i) => i.direction === selectedDirection)
              .map((i) => i.group)
          )
        )
      : [];
  }, [selectedDirection]);

  const filteredItems = useMemo(() => {
    const lower = search.trim().toLowerCase();

    const matchStartsWith = (text?: string) =>
      !!text && text.toLowerCase().startsWith(lower);
    const matchIncludes = (text?: string) =>
      !!text && text.toLowerCase().includes(lower);

    // 1️⃣ Сначала фильтрация по направлению и группе
    const baseItems = flatItems.filter(
      (i) =>
        (!selectedDirection || i.direction === selectedDirection) &&
        (!selectedGroup || i.group === selectedGroup)
    );

    // 2️⃣ Если нет поискового запроса — вернуть всё
    if (lower === "") return baseItems;

    // 3️⃣ Только те, где есть совпадение в name или description
    const startsWith = baseItems.filter((i) => matchStartsWith(i.name));
    const includes = baseItems.filter(
      (i) =>
        !startsWith.includes(i) &&
        matchIncludes(i.name)
    );
    const inDescription = baseItems.filter(
      (i) =>
        !startsWith.includes(i) &&
        !includes.includes(i) &&
        matchIncludes(i.description)
    );

    return [...startsWith, ...includes, ...inDescription];
  }, [search, selectedDirection, selectedGroup]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.sidebar}>
        <label style={styles.label}>Направление</label>
        <select
          style={styles.select}
          value={selectedDirection}
          onChange={(e) => {
            setSelectedDirection(e.target.value);
            setSelectedGroup("");
            setSelectedItem(null);
          }}
        >
          <option value="">Все направления</option>
          {directions.map((dir) => (
            <option key={dir} value={dir}>
              {dir}
            </option>
          ))}
        </select>

        <label style={{ ...styles.label, marginTop: "16px" }}>Группа</label>
        <select
          style={styles.select}
          value={selectedGroup}
          onChange={(e) => {
            setSelectedGroup(e.target.value);
            setSelectedItem(null);
          }}
          disabled={!selectedDirection}
        >
          <option value="">Все группы</option>
          {groups.map((grp) => (
            <option key={grp} value={grp}>
              {grp}
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
            setSelectedItem(null);
          }}
          style={styles.searchInput}
        />

        <ul style={styles.resultList}>
          {filteredItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                ...styles.resultItem,
                backgroundColor:
                  selectedItem?.id === item.id ? "#eef6ff" : "transparent",
              }}
            >
              <strong>{highlightMatch(item.name, search)}</strong>
              <div style={styles.meta}>
                {item.direction} / {item.group}
              </div>
            </li>
          ))}
          {filteredItems.length === 0 && (
            <li style={styles.noResult}>Ничего не найдено</li>
          )}
        </ul>

        <div style={styles.detailsBox}>
          {selectedItem ? (
            <>
              <h4 style={styles.detailsTitle}>{selectedItem.name}</h4>
              <div style={styles.metaSmall}>
                {selectedItem.direction} / {selectedItem.group}
              </div>
              <p style={styles.description}>
                {selectedItem.description || "Описание отсутствует"}
              </p>
            </>
          ) : (
            <>
              <h4 style={styles.detailsTitle}>
                Описание конструктивного элемента
              </h4>
              <p style={styles.description}>
                Выберите конструктивный элемент слева, чтобы увидеть его
                назначение, тип и описание. Это поможет точнее ориентироваться в
                проектной документации.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StructuredListBoxNavigator;