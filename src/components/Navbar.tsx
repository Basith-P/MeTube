import { Stack } from "@mui/material";

import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchField } from ".";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    justifyContent="space-between"
    position="sticky"
    sx={{ top: 0, zIndex: 1 }}
  >
    <Link to="/">
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchField />
  </Stack>
);

export default Navbar;
