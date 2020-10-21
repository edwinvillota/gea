import { useState, useEffect } from 'react';

function useTableSearch(inputData = [], prop = null) {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(inputData);

  useEffect(() => {
    const regExp = new RegExp(`(${search})`, 'g');
    let filterData;
    if (prop && search) {
      filterData = inputData.filter((row) => regExp.test(row[prop]));
      setData(filterData);
    } else {
      setData(inputData);
    }
  }, [search]);

  return [data, search, setSearch];
}

export default useTableSearch;
