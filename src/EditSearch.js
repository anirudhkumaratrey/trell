import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getSearch, updateSearch } from "./api";

export const EditSearch = () => {
  const match = useRouteMatch()
  const [Search, setSearch] = useState();
  const history = useHistory()

  useEffect(() => {
    const fetchSearch = async () => {
      const Search = await getSearch(match.params.id)
      setSearch(Search)
    }
    fetchSearch()
  }, []);

  const onSubmit = async (data) => {
    await updateSearch(data, match.params.id)
    history.push("/")
  }

  return Search ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Search Item</h3>
        <SearchForm Search={Search} onSubmit={onSubmit}/>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
