export default function PhoneMockup() {
  return (
    <div className="phone-panel">
      <div className="phone-shell">
        <div className="phone-topbar">
          <span>Good morning</span>
          <span>Welcome to Voce</span>
        </div>
        <div className="featured-card">
          <div className="card-title">Featured</div>
          <div className="card-graphic" />
        </div>
        <div className="phone-list">
          <div className="track-row">
            <div>
              <p className="track-title">Ubi Caritas</p>
              <p className="track-subtitle">St. Cecilia Choir</p>
            </div>
            <button className="heart-btn">♡</button>
          </div>
          <div className="track-row">
            <div>
              <p className="track-title">You Are Salt</p>
              <p className="track-subtitle">Fr. John Ngoka</p>
            </div>
            <button className="heart-btn">♡</button>
          </div>
          <div className="track-row">
            <div>
              <p className="track-title">Mma Oma</p>
              <p className="track-subtitle">Fidelis Ihechukwu</p>
            </div>
            <button className="heart-btn">♡</button>
          </div>
        </div>
        <div className="phone-tabs">
          <span className="tab active">Home</span>
          <span className="tab">Search</span>
          <span className="tab">Library</span>
          <span className="tab">Profile</span>
        </div>
      </div>
    </div>
  )
}
