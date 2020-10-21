import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

// Assets
import '../assets/styles/components/PaginationBar.scss';

// Components
import Button from './Button';

const PaginationBar = ({ page, handleChangePage, total, limit }) => {
  const [buttons, setButtons] = useState([]);
  const [gotoPage, setGotoPage] = useState(1);

  useEffect(() => {
    const quantity = Math.ceil(total / limit);
    const numbers = [];
    for (let i = 1; i <= quantity; i++) {
      numbers.push(i);
    }
    setButtons(numbers);
  }, [total, limit, page]);

  const handleChangeGoToPage = (e) => {
    const { value } = e.target;

    if (value < 1) {
      setGotoPage(1);
    } else if (value > buttons.length) {
      setGotoPage(buttons.length);
    } else {
      setGotoPage(value);
    }
  };

  return (
    <div className='pagination__wrapper'>
      <Button icon='AiOutlineDoubleLeft' onClick={() => handleChangePage(1)} disabled={(parseInt(page, 10) === 1)} />
      <Button icon='AiOutlineLeft' onClick={() => handleChangePage(page - 1)} disabled={(parseInt(page, 10) === 1)} />
      <div className='number__wrapper'>
        {
          buttons.map((i) => (
            <Button
              key={`page${i}`}
              className={classNames('number__button', { 'active': (i === parseInt(page, 10)) })}
              text={i}
              onClick={() => handleChangePage(i)}
            />
          ))
        }
      </div>
      <Button icon='AiOutlineRight' onClick={() => handleChangePage(parseInt(page, 10) + 1)} disabled={(parseInt(page, 10) === buttons.length)} />
      <Button icon='AiOutlineDoubleRight' onClick={() => handleChangePage(buttons.length)} disabled={(parseInt(page, 10) === buttons.length)} />
      <div className='goto__wrapper'>
        <span className='goto__text'>Página</span>
        <input
          type='number'
          className='goto__input'
          min={1}
          max={buttons.length}
          value={gotoPage}
          onChange={handleChangeGoToPage}
        />
        <span className='goto__text'>Ir</span>
        <Button icon='AiOutlineRight' onClick={() => handleChangePage(gotoPage)} />
      </div>
    </div>
  );
};

export default PaginationBar;
