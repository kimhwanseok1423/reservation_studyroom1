import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/CalendarPopup.css';

const CalendarPopup = ({ tempDate, setTempDate, onApply }) => {
  const [ignoreSchedule, setIgnoreSchedule] = useState(false);

  const handleReset = () => {
    setTempDate(null);
  };

  const handleCheckbox = (e) => {
    setIgnoreSchedule(e.target.checked);
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  return (
    <div className="calendar-popup" style={{ position: 'absolute', top: '50px', zIndex: 10, background: '#fff', padding: '10px', border: '1px solid #ccc' }}>
      <div className="calendar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <button>{'<'}</button>
        <strong>{year}.{month}월</strong>
        <button>{'>'}</button>
        <label>
          <input type="checkbox" checked={ignoreSchedule} onChange={handleCheckbox} /> 일정 무관
        </label>
      </div>

      <DatePicker
        selected={tempDate}
        onChange={setTempDate}
        inline
        dayClassName={(date) =>
          date.toDateString() === new Date().toDateString()
            ? 'today'
            : tempDate && date.toDateString() === tempDate.toDateString()
            ? 'selected'
            : ''
        }
      />

      <div className="time-slider" style={{ margin: '10px 0' }}>
        {/* 시간 선택용 UI 자리 */}
      </div>

      <div className="calendar-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className="btn-yellow" onClick={handleReset}>초기화</button>
        <button className="btn-purple" onClick={onApply}>날짜 적용하기</button>
      </div>
    </div>
  );
};

export default CalendarPopup;