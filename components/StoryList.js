import Link from 'next/link';

const StoryList = ({data}) => (
  <div className="data-list">
    {data.map(story => (
      <div className="data" key={story.id}>
        <h2 className="data-title"><a href={story.url}>{story.title}</a></h2>
        <div className="data-details">
          <span>{story.points || 0} points</span>
          <Link href={`/story?id=${story.id}`}><a>{story.comments_count || 0} comments</a></Link>
        </div>
      </div>
    ))}
    
    <style jsx>{`
      .data-list {
        padding: 0 1em; 
      }
      .data {
        padding: 1em 0;
      }
      .data-title {
        font-size: 1.5rem;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5rem;
      }
      .data-title a, data-details a:hover {
        text-decoration: none;
        color: black;
      }
      .data-title a:hover {
        color: orange;
      }
      .data-details {
        font-size: 1rem;
        font-weight: bold;
      }
      .data-details span {
        margin-right: 1em;
      }
      .data-details a {
        color: blue;
        text-decoration: none;
      }
      `}</style>
  </div>
);
export default StoryList;
