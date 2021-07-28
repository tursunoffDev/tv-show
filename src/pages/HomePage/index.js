import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "@/components/Loader";
import CustomShows from "@/components/CustomShows";
import { fetchCustomShows } from "@/redux";
import ShowcaseImage from "@/components/ShowcaseImage";
import { shuffle, take } from "lodash";

function HomePage({ shows, customShows, fetchCustomShows, searchShows }) {
  const [sortedShows, setSortedShows] = useState();
  const [showImgs, setShowImgs] = useState([]);

  useEffect(() => {
    fetchCustomShows();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const randomShows = take(shuffle(customShows), 3);
    setShowImgs(randomShows);
  }, [customShows]);

  useEffect(() => {
    const sortedShows = searchShows.map((show) => show.show);
    setSortedShows(sortedShows);
  }, [searchShows]);

  return (
    <>
      {shows.loading ? (
        <Loader />
      ) : (
        <>
          {sortedShows && sortedShows.length > 0 ? (
            <></>
          ) : (
            <ShowcaseImage images={showImgs} />
          )}
          <CustomShows
            icon="FavoriteIcon"
            customShows={
              sortedShows && sortedShows.length > 0 ? sortedShows : customShows
            }
          />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    shows: state.shows,
    customShows: state.shows.customShows,
    searchShows: state.shows.searchShows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomShows: () => dispatch(fetchCustomShows()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
