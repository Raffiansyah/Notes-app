import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

export default function Navigation() {
  const { user } = useContext(UserContext);

  if (user !== null) {
    return (
      <h2>
        <Link to="/archive">Archived</Link>
      </h2>
    );
  }
}
