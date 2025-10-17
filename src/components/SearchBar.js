import React, { useState } from 'react';
import CalendarPopup from './CalendarPopup';

const SearchBar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // 최종 반영 날짜
  const [tempDate, setTempDate] = useState(null);         // 임시 선택 날짜

  const handleDateClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleApplyDate = () => {
    if (tempDate) {
      setSelectedDate(tempDate);
      console.log('선택한 날짜 :', tempDate.toLocaleDateString());
      setShowCalendar(false);
    }
  };

  return (
    <div style={{ margin: '20px', position: 'relative' }}>
      <input
        type="text"
        placeholder="검색어 입력"
        style={{ padding: '10px', width: '200px', marginRight: '10px' }}
      />
      <button onClick={handleDateClick} style={{ padding: '10px 20px' }}>
        {selectedDate ? selectedDate.toLocaleDateString() : '날짜 선택'}
      </button>

      {showCalendar && (
        <CalendarPopup
          tempDate={tempDate}
          setTempDate={setTempDate}
          onApply={handleApplyDate}
        />
      )}
    </div>
  );
};

export default SearchBar;