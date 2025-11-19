import React from "react";
import "./Tags.css";

const title = "Our Popular Tags";

const tagsList = [
  { link: "#", text: "envato" },
  { link: "#", text: "themeforest" },
  { link: "#", text: "codecanyon" },
  { link: "#", text: "videohive" },
  { link: "#", text: "audiojungle" },
  { link: "#", text: "3docean" },
  { link: "#", text: "graphicriver" },
  { link: "#", text: "photodune" },
  { link: "#", text: "elements" },
];

const Tags = () => {
  return (
    <div className="popular-tags p-3">
      <div className="tags-header">
        <h5 className="title">{title}</h5>
      </div>

      <ul className="tags-wrapper">
        {tagsList.map((val, i) => (
          <li key={i}>
            <a href={val.link}>{val.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
