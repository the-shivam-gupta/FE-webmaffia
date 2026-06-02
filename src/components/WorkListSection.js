"use client";

import Image from "next/image";
import { useState } from "react";

export default function WorkListSection({ items }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = (e) => {
    e.preventDefault();
    setExpanded((prev) => !prev);
  };

  return (
    <section data-section="work_section" className="work_section">
      <div className={`work_box${expanded ? " active" : ""}`}>
        {items.map((item) => (
          <div className="work_item" key={`${item.name}-${item.image}`}>
            <a
              href={item.url || "#"}
              className="work_img"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={540}
                height={395}
              />
            </a>
            <a
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="work_name">{item.name}</h2>
              <div className="work_title">{item.title}</div>
            </a>
          </div>
        ))}
      </div>
      <div className="cta_work">
        <a
          href="#"
          className={`cta_text${expanded ? " active" : ""}`}
          onClick={toggleExpanded}
        >
          View <span className="cta_span">All</span> <span>Work</span>
          <span className="active_span">Less</span>
        </a>
      </div>
    </section>
  );
}
