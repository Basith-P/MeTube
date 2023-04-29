import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarProps) => (
  <Stack
    sx={{
      overflowY: "scroll",
      height: { xs: "auto", md: "90%" },
      flexDirection: { xs: "row", md: "column" },
      px: { xs: 0, md: 2 },
    }}
  >
    {categories.map((category) => (
      <button
        key={category.name}
        className="category-btn"
        style={{
          backgroundColor:
            selectedCategory === category.name ? "#3d3d3d" : "transparent",
        }}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span style={{ marginRight: 10 }}>{category.icon}</span>
        <span
          style={{
            opacity: selectedCategory === category.name ? 1 : 0.8,
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
