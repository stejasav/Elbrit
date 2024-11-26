import React from "react";

export default function GridLayout() {
  return (
    <div className="pill-container">
      <div className="pill-slide">
        <div>
          <img src="./img/pill1.png" alt="pill1" className="pill1" />
          <img src="./img/pill2.png" alt="pill2" className="pill2" />
        </div>
        <div>
          <img src="./img/pill3.png" alt="pill3" className="pill3" />
          <img src="./img/pill4.png" alt="pill4" className="pill4" />
        </div>
      </div>

      <div className="pill-slide">
        <div>
          <img src="./img/pill1.png" alt="pill5" className="pill5" />
          <img src="./img/pill6.png" alt="pill6" className="pill6" />
        </div>
        <div>
          <img src="./img/pill7.png" alt="pill7" className="pill7" />
          <img src="./img/pill8.png" alt="pill8" className="pill8" />
        </div>
      </div>

    </div>
  );
}
