import React from 'react'
import { summary, newsChannel, lastUpdate } from '../../../config/config';
import './Details.css';

function Details({ channel, published, author }) {
	return (
		<details className="details" open>
      <summary className="summary">{summary}</summary>
      <p className="channel">
        <span>Channel: </span>
        {newsChannel(channel)}
      </p>
      <p className="published">
        <span>Published at: </span>
        {lastUpdate(published)}
      </p>
      <p className="author">
        <span>Author: </span>
        {author}
      </p>
    </details>
	)
}

export default Details