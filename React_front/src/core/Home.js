import React from 'react';
import Posts from '../post/Posts';

const Home = () => (
    <div>
    
    <div className="jumbotron">
        <h2>Meet@Dinner</h2>
        <p className="lead">Stop having dinner by youself, yet find someone to share...  
        {/* <Link to={`/`} className="btn btn-raised btn-info mr-5">
          See others' dinner post
        </Link> */}
        </p>
    </div>

    <div className="container">
        <Posts />
    </div>
    </div>


)

export default Home;