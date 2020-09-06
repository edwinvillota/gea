import { useState, useEffect } from 'react';

function useTablePagination(data, initPage = 1, limit = 10, defaultProp, normalAction, searchAction) {
  const [lim] = useState(limit);
  const [page, setPage] = useState(initPage);
  const { list, page: requestPage, total } = data;
  const [keyword, setKeyword] = useState('');
  const [searchProp, setSearchProp] = useState(defaultProp);

  useEffect(() => {
    normalAction();
  }, []);

  useEffect(() => {
    if (page !== requestPage) {
      if (!keyword) {
        normalAction(page);
      } else {
        searchAction([{ propname: searchProp || '', value: keyword }], page);
      }
    }
  }, [page, keyword, searchProp]);

  useEffect(() => {
    setPage(1);
    if (keyword) {
      searchAction([{ propname: searchProp || '', value: keyword }], page);
    } else {
      normalAction(page);
    }
  }, [keyword, searchProp]);

  return { lim, list, total, requestPage, keyword, searchProp, setPage, setKeyword, setSearchProp };

}

export default useTablePagination;
