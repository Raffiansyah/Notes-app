import React from "react";
import { Link } from "react-router-dom";
import { getAccessToken } from "../../utils/api";

export default function Navigation() {
  const user = getAccessToken();

  if(user !== null){
    return (
        <h2>
            <Link to='/archive'>Archived</Link>
        </h2>
    )
  }
}
