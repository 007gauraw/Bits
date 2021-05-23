import "./styles.css";
import { get } from "./axios";
import React, { useState, useEffect } from "react";
import Table from "./table";
import config from "./headerConfig";
import Pagination from "./pagination";

export default function App() {
  const [songs, setReleases] = useState([]);

  const [pages, setPagination] = useState({
    page: 1,
    per_page: 30,
  });

  const [activePages, setActivePagination] = useState({
    active: 1,
  });
  const getAllArtist = () => {
    get("search", `ev=em_rs&type=artist`).then((response) => {
      const {
        data: { releases, pagination },
      } = response;
      console.log(response);
    });
  };
  getAllArtist();
  const updatePage = () => {
    get(
      "artists/2/releases",
      `page=${activePages.active}&per_page=${pages.per_page}`
    ).then((response) => {
      const {
        data: { releases, pagination },
      } = response;
      setReleases(releases);
      setPagination(pagination);
    });
  };

  useEffect(() => {
    updatePage();
  }, [activePages]);

  const handlePageChnage = (event, nextPage) => {
    event.preventDefault();
    setActivePagination({ ...activePages, active: nextPage });
  };

  return (
    <div className="App">
      <Table headerConfig={config} releasesData={songs}></Table>
      <Pagination
        paginationInfo={pages}
        handlePageChnage={handlePageChnage}
      ></Pagination>
    </div>
  );
}
