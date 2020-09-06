/* eslint-disable react/no-array-index-key */
import React from 'react';

// Assets
import '../assets/styles/components/GenTable.scss';

// Hooks
import useTableSearch from '../hooks/useTableSearch';

const GenTable = ({ headers, data, ignore = [] }) => {

  const [filteredData, search] = useTableSearch(data, 'username');
  const rows = search ? filteredData : data;

  return (
    <div className='gentable__container'>
      <table className='gentable__table'>
        <thead>
          <tr className='table__row'>
            {
              headers ?
                (headers.map((h, i) => <th key={i} className='table__th'>{h}</th>)) :
                (null)
            }
          </tr>
        </thead>
        <tbody>
          {
            rows ?
              (rows.map((row, i) => {
                return (
                  <tr className='table__row' key={i}>
                    {Object.keys(row).map((val, j) => {
                      if (!ignore.includes(val)) {
                        return (
                          <td className='table__td' key={j}>
                            {row[val]}
                          </td>
                        );
                      }
                      return null;
                    })}
                  </tr>
                );
              })) :
              (null)
          }
        </tbody>
      </table>
    </div>
  );
};

export default GenTable;
