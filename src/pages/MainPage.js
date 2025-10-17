import React from 'react';
import '../css/MainPage.css';
import SearchBar from '../components/SearchBar';

const dummyRooms = [
  { id: 1, name: '강남역 파티룸 하비스트 2호점', location: '서초동', price: 59000, priceUnit: '원/패키지', maxPeople: 10, likes: 103, views: 1183 },
  { id: 2, name: '강남역 파티룸 하비스트 1호점', location: '서초동', price: 1500, priceUnit: '원/시간', maxPeople: 16, likes: 91, views: 741 },
  { id: 3, name: '강남역 파티룸 하비스트 6호점', location: '서초동', price: 50000, priceUnit: '원/패키지', maxPeople: 8, likes: 64, views: 1170 },
  { id: 4, name: '강남역 파티룸 하비스트 8호점', location: '서초동', price: 50000, priceUnit: '원/패키지', maxPeople: 8, likes: 55, views: 821 },
  { id: 5, name: '강남역 파티룸 하비스트 10호점', location: '서초동', price: 59000, priceUnit: '원/패키지', maxPeople: 12, likes: 43, views: 828 },
  { id: 6, name: '10월특가 세미나모임 [디크]', location: '서초동', price: 2000, priceUnit: '원/시간', maxPeople: 16, likes: 28, views: 1388 },
];

const MainPage = () => {
  return (
    <div className="main-container">
      
      {/* Header 영역 */}
      <header className="main-header">
        <div className="logo">SpaceCloud.</div>
        <div className="header-search">
          <input type="text" placeholder="스터디룸" />
          <button className="search-btn">🔍</button>
        </div>
        <div className="header-icons">
          <span>💬</span>
        </div>
      </header>

      {/* Filter 영역 */}
      <div className="filter-bar">
        <select>
          <option>지역</option>
        </select>
        <select>
          <option>인원</option>
        </select>
        <select>
          <option>날짜</option>
        </select>
        <button className="filter-btn">필터</button>
        <button className="map-btn">지도</button>
      </div>

      <div className="unit-bar">
        <button className="unit-btn active">전체</button>
        <button className="unit-btn">시간단위</button>
        <button className="unit-btn">패키지단위</button>
        <button className="unit-btn">월단위</button>
        <div className="sort-dropdown">
          베스트공간순 ▼
        </div>
      </div>

      {/* Room Grid */}
      <div className="room-grid">
        {dummyRooms.map(room => (
          <div key={room.id} className="room-card">
            <div className="room-image">
              <div className="badge">바로결제</div>
            </div>
            <h4 className="room-name">{room.name}</h4>
            <p className="room-location">{room.location}</p>
            <p className="room-price">{room.price.toLocaleString()} {room.priceUnit}</p>
            <p className="room-info">최대 {room.maxPeople}인 • ❤️ {room.likes} • 👀 {room.views}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button>{'<'}</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>{'>'}</button>
      </div>
    </div>
  );
};

export default MainPage;