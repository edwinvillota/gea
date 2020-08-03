/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../assets/styles/components/GenTable.scss';

// Components
import Icon from './Icon';

// Hooks
import useTableSearch from '../hooks/useTableSearch';

const GenTable = ({ title, headers, data, actions, ignore = [] }) => {

  const [filteredData, search] = useTableSearch(data, 'username');
  const rows = search ? filteredData : data;

  return (
    <div className='gentable__container'>
      <div className='gentable__header'>
        <h1 className='gentable__title'>
          {title}
        </h1>
        <div className='header__actions'>
          {
            actions ?
              (actions.map((a, i) => (
                <Link key={i} to={a.route} className='action'>
                  <Icon name={a.icon} className='action__icon' />
                  <span>{a.name}</span>
                </Link>
              ))) :
              (null)
          }
        </div>
      </div>
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
