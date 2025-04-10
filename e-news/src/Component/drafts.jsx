import { useState } from "react";
import "./drafts.css";

const Drafts = () => {
  const [drafts] = useState([
    {
      id: 1,
      title: "Breaking: Market Hits All-Time High",
      content: "Stock markets see record gains amid economic optimism...",
      date: "March 28, 2025",
      author: "John Doe"
    },
    {
      id: 2,
      title: "Tech Industry Faces Major Layoffs",
      content: "Big tech companies announce mass job cuts due to market slowdowns...",
      date: "March 27, 2025",
      author: "Jane Smith"
    },
    {
      id: 3,
      title: "AI is Changing Journalism",
      content: "Experts discuss how AI tools are revolutionizing the media industry...",
      date: "March 26, 2025",
      author: "Michael Brown"
    }
  ]);

  return (
    <div className="drafts-container">
      <div className="drafts-wrapper">
        <h2>News Drafts</h2>
        <ul>
          {drafts.map((draft) => (
            <li key={draft.id} className="draft-card">
              <div className="draft-content">
                <h3>{draft.title}</h3>
                <p>{draft.content}</p>
                <div className="meta-info">
                  <span>By {draft.author}</span> | <span>{draft.date}</span>
                </div>
              </div>
              <div className="actions">
                <button className="edit-btn">Edit</button>
                <button className="publish-btn">Publish</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drafts;
