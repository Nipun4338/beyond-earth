import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UpcomingCard from './UpcomingCard';


const PastEvent = ({ tweets }) => {
    const perPage = 4;
    const [lastPosition, setLastPosition] = useState(perPage);
    const [allTweets, setAllTweets] = useState(tweets.slice(0, perPage));
    const [hasMore, setHasmore] = useState(true);

    const loadProducts = () => {
      setTimeout(() => {
        setAllTweets((prev) => [
          ...prev,
          ...tweets.slice(lastPosition, lastPosition + perPage)
        ]);
      }, 2000);
      setLastPosition(lastPosition + perPage);
      if (lastPosition >= tweets.length) {
        setHasmore(false);
      }
    };

  
    return (
      <div>
      <div style={{textAlign: 'center', margin: '100px'}}>
          <h1><q>Across the sea of space, the stars are other suns.</q></h1>
          <figcaption style={{color: 'white', fontWeight: 'normal'}}>- Carl Sagan</figcaption>
      </div>
      <InfiniteScroll
        dataLength={allTweets.length}
        next={loadProducts}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex flex-col">
          {allTweets.map((value, index) => {return(
            <div key={index} className="py-10 px-5" style={{margin: "20px"}}>
              <UpcomingCard values={value}/>
            </div>
          );}
          )}
        </div>
      </InfiniteScroll>
      </div>
    );
  };

export default PastEvent;