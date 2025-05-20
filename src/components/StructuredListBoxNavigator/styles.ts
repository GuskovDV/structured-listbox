// styles.ts

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    width: "980px",
    minHeight: "700px", // общая увеличенная высота
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    fontFamily: "Segoe UI, sans-serif",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
  },
  sidebar: {
    width: "360px",
    padding: "16px",
    backgroundColor: "#f9f9f9",
    borderRight: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  select: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  content: {
    flex: 1,
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // разносит список и описание
  },
  searchInput: {
  width: "100%",
  padding: "10px 12px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  marginBottom: "12px",
  boxSizing: "border-box", // 👈 важно, чтобы padding не увеличивал ширину
},
 resultList: {
  listStyle: "none",
  padding: 0,
  margin: 0,
  height: "580px", // ← фиксированная высота
  overflowY: "auto", // ← всегда прокрутка при необходимости
  border: "1px solid #eee",
  borderRadius: "4px",
  backgroundColor: "#fff",
  },
  resultItem: {
    padding: "10px 12px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },
  meta: {
    fontSize: "12px",
    color: "#888",
  },
  metaSmall: {
    fontSize: "13px",
    color: "#999",
    marginBottom: "6px",
  },
  noResult: {
    padding: "10px",
    textAlign: "center",
    color: "#aaa",
    fontStyle: "italic",
  },
  detailsBox: {
    marginTop: "16px",
    padding: "16px",
    backgroundColor: "#f0f4f9",
    border: "1px solid #cce3f5",
    borderRadius: "6px",
    minHeight: "140px",
    display: "flex",
    flexDirection: "column",
  },
  detailsTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600",
  },
  description: {
    margin: 0,
    fontSize: "14px",
    color: "#333",
  },
};

export default styles;
