const TABS = [
  { label: "DSA", value: "DSA" },
  { label: "System Design & Backend", value: "SYSTEM_DESIGN" },
  { label: "AI & Gen AI", value: "AI_GENAI" },
  { label: "Devops", value: "DEVOPS" },
  { label: "Others", value: "OTHERS" },
];

export default function BlogTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {TABS.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`px-4 py-2 rounded-full border text-sm transition
            ${
              active === tab.value
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-gray-300 hover:bg-gray-100"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
