import React from "react";
import { Button, Card } from "react-bootstrap";
import "./NewsCard.css"; 
import { Details } from "../index";
import { ReactComponent as ArrowIcon } from '../../images/ArrowIcon.svg';

function NewsCard({ imageUrl, alt, description, title, channel, published, urlNews, author }) {
  
  return (
    <Card className="card">
      <Card.Img className="card-img" variant="top" src={imageUrl} alt={alt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-description">{description?.substr(0, 150)}</Card.Text>
        <Details channel={channel} published={published} author={author} />
        <Button
          className="card-btn"
          href={urlNews}
          target="_blank"
        >
          Read more <ArrowIcon className="arrow-icon" />
        </Button>
      </Card.Body>
    </Card>
  )
}

export default NewsCard