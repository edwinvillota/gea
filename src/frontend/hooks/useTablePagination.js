import { useState, useEffect } from 'react';

function useTablePagination(data, initPage = 1, limit = 10, normalAction, searchAction) {
  const [lim] = useState(limit);
  const [page, setPage] = useState(initPage);
  const { list, page: requestPage, total } = data;
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    normalAction();
  }, []);

  useEffect(() => {
    if (page !== requestPage) {
      if (!keyword) {
        normalAction(page);
      } else {
        searchAction([{ propname: 'username', value: keyword }], page);
      }
    }
  }, [page, keyword]);

  useEffect(() => {
    if (keyword) {
      searchAction([{ propname: 'username', value: keyword }], page);
    } else {
      normalAction(page);
    }
  }, [keyword]);

  return { lim, list, total, requestPage, keyword, setPage, setKeyword };

}

export default useTablePagination;
