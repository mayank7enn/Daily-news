import React from 'react';
import './newsitem.css';

const NewsItem = ({ title, desc, imgurl, newsurl, author, source }) => {
  return (
    <div className="card">
      <span className="position-absolute top-0 translate-middle badge rounded-pill " style={{ zIndex: 1, left: '90%',backgroundColor:'#1B1A55' }}>
        {source}
      </span>
      <img src={imgurl} className="card-img-top" alt="news" style={{width: '100%', height: '200px', objectFit: 'cover'}} />
      <div className="card-body" style={{backgroundColor:'#C5DFF5',color:'#1B1A55'}}>
        <h6 className="card-title">{title}</h6>
        <p className="card-text" style={{fontSize: 'smaller'}}>{desc}.....</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className="card-text small-text" style={{fontSize: 'smaller'}}>Published by - {author ? author : "Unknown"}</p>
          <a href={newsurl} style={{backgroundColor:'#1B1A55', border:'0px', color:'#F7EFE5', fontSize: 'smaller'}} target='_blank' rel="noreferrer" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
