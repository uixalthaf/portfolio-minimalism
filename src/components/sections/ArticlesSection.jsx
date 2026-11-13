import React from "react";
import { ARTICLES } from "../../configs/constants";
import Row from "../Row";

export default function ArticlesSection() {
  return (
    <section id="articles" className="block section-reveal">
      <div className="label">ARTICLES</div>
      {ARTICLES.map(({ title, url }, index) => (
        <Row index={index} href={url} key={title}>
          <div className="article-title">{title}</div>
        </Row>
      ))}
    </section>
  );
}
