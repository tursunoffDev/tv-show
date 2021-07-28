import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import EpisodeDetails from "@/components/EpisodeDetails";
import Loader from "@/components/Loader";

import { fetchRelatedEpisode } from "@/redux";

function SinglePage({ loading, episode, fetchRelatedEpisode }) {
  const { id } = useParams();

  useEffect(() => {
    fetchRelatedEpisode(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <EpisodeDetails show={episode} />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.shows.loading,
    episode: state.shows.relatedEpisode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRelatedEpisode: (id) => dispatch(fetchRelatedEpisode(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
