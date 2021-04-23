import React from "react";
import { SearchForm } from "./SearchForm";
import { createSearch } from "./api";
import { useHistory } from "react-router-dom";

export const CreateSearch = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    await createSearch(data)
    history.push("/")
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>New Search</h3>
        <SearchForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
