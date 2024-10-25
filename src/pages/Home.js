import React from 'react';
import './Home.css'; // CSS 파일 임포트

function Home() {
  return (
    <div className="home-page">
      <h1>Deété Espresso 송강점</h1>
      <h2>Signature Menu</h2>
      <div className="featured">
        <div className="item">
          <h3>청포도 케일주스</h3>
          <img className="recommend-image" src="청포도케일주스.jpg" alt="청포도 케일주스"></img>
        </div>
        <div className="item">
          <h3>복숭아에이드</h3>
          <img className="recommend-image" src="복숭아에이드.jpg" alt="복숭아에이드"></img>
        </div>
        <div className="item">
          <h3>라떼</h3>
          <img className="recommend-image" src="라떼.jpg" alt="라떼"></img>
        </div>
      </div>

      <div className="cta">
        <h2>또 뭐 넣지..?</h2>
        <p></p>
      </div>
    </div>
  );
}

export default Home;
