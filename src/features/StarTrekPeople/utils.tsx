import { NavLink } from "react-router-dom";
import { getIDFromURL } from "../../utils";

export const getDetailsAnchorTag = (url: string) => {
  const pageURL = `/details/${getIDFromURL(url)}`;
  return <NavLink to={pageURL}>details</NavLink>;
};
