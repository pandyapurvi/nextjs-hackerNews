import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';

class Story extends React.Component {

  static async getInitialProps({ req, res, query }) {
    let data;
    //console.log(query);
    let itemId;
    try {
      itemId = query.id;
      const response = await fetch(`http://node-hnapi.herokuapp.com/item/${itemId}`);
      data = await response.json();
    } catch (err) {
      console.log(err);
      data = null;
    }
    

    return { data, itemId }

}

  render() {
    const { data, itemId } = this.props;
    if (!data) {
      return <Error statusCode={503}/>
    }
    return (
      <Layout title={data.title}>
        <main>
          <h1 className="data-title"><a href={data.url}>{data.title}</a></h1>
          <div className="data-details">
            <strong>{data.points || 0} points</strong>
            <strong>{data.comments_count ||0} comments</strong>
            <strong>{data.time_ago}</strong>
          </div>

          {data.comments.length > 0 ? (
            <CommentList comments={data.comments}/>
          ) : 
            <div>No Comments</div>
          }
        </main>

        <style jsx>{`
          main {
            padding: 1em;
          }
          .data-title {
            font-size: 1.2rem;
            margin: 0;
            font-weight: 300;
            padding-bottom: 0.5 rem;
          }
          .data-title a {
            color: #333;
            text-decoration: none;
          }
          .data-title a:hover {
            text-decoation: initial;
          }
          .data-details {
            font-size: 0.8rem;
            padding-bottom: 1em;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }
          .data-details strong {
            margin-right: 1em;
          }
          `}</style>

      </Layout>
    )
  }
}
export default Story;