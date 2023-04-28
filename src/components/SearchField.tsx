import { Paper, OutlinedInput, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchField = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #3f51b5",
        boxShadow: "none",
        pl: 2,
        mr: { sm: 2 },
      }}
    >
      <OutlinedInput
        className="search-bar"
        placeholder="Search"
        value=""
        onChange={() => {}}
        margin="dense"
        sx={{
          verticalAlign: "middle",
          "& fieldset": { border: "none" },
          "& input": { p: 1 },
        }}
      />
      <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchField;
