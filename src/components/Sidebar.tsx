import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const selectedCategory = "New";

const Sidebar = () => (
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
