import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';


class Index extends React.Component {

  static async getInitialProps({req, res, query}) {
    let data;
    //console.log(query); This will give the { page: 'pageNo.'}
    let page;

    try {
     // page = 1; bt default the page will be on page=1;
      page = Number(query.page) || 1; //Converted string to Number
      const response = await fetch(`http://node-hnapi.herokuapp.com/news?page=${page}`);
      data = await response.json();
    } catch (err) {
      //console.log(err);
      data = [];
    }

    return { data, page }
  }

  render() {
    const { data, page } = this.props;
    if (data.length === 0) {
      return <Error statusCode={503}/>
    }
    return (
      <Layout title="Hacker News" description="A Hacker News project made with Next.js" >
        <h1>Hacker News</h1>
        <StoryList data={data} />

        <footer>
          <Link href={`/?page=${page + 1}`}><button>Go to Next Page</button></Link>
        </footer>

        <style jsx>{`
          footer {
            padding: 1em;
            font-weight: bold;
          }
          footer button {
            color: black;
            background-color: orange;
            padding: 0.5rem;
            font-size: 1rem;
            font-weight: bold;
          }
          `}</style>
      </Layout>

    )
  }
}
export default Index;