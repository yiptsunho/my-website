import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ScrollBar() {
    const [activeSec, setActiveSec] = useState("#")

  return (
    <div className="scrollbar">
        <a href="#" className={activeSec === "#" ? "active" : ""} onClick={() => setActiveSec("#")}>
          <i className="fa-solid fa-school px-3" title="Education" />
        </a>
        <a href="#professional" className={activeSec === "#professional" ? "active" : ""} onClick={() => setActiveSec("#professional")}>
          <i className="fa-solid fa-briefcase px-3" title="Professional Experience" />
        </a>
        <a href="#skills" className={activeSec === "#skills" ? "active" : ""} onClick={() => setActiveSec("#skills")}>
          <i className="fa-solid fa-toolbox px-3" title="Skills" />
        </a>
        <a href="#other" className={activeSec === "#other" ? "active" : ""} onClick={() => setActiveSec("#other")}>
          <i className="fa-solid fa-ellipsis px-3" title="Other Experience" />
        </a>
        <Link to={process.env.PUBLIC_URL + "/files/YIPTsunHoCV_updated.pdf"} target="_blank" download>
          <i className="fa-solid fa-download px-3" title="My Resume" />
        </Link>
    </div>
  )
};

export default ScrollBar;
