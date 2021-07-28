import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsCard from "@/components/DetailsCard";
import Casts from "@/components/Cast";
import Devs from "@/components/Devs";
import Loader from "@/components/Loader";
import Episodes from "@/components/Episodes";

import {
  fetchSelectedShow,
  fetchShowCasts,
  fetchShowDevelopers,
  fetchEpisodes,
} from "@/redux";

function SinglePage({
  loading,
  show,
  showDevs,
  showCasts,
  showEpisodes,
  fetchShowCasts,
  fetchDevelopers,
  fetchEpisodes,
  fetchSelectedShow,
}) {
  const { id } = useParams();

  useEffect(() => {
    fetchSelectedShow(id);
    fetchShowCasts(id);
    fetchDevelopers(id);
    fetchEpisodes(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <DetailsCard show={show} />
          <Casts casts={showCasts} />
          <Episodes
            icon="FavoriteIcon"
            episodes={showEpisodes && showEpisodes}
          />
          <Devs devs={showDevs} />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.shows.loading,
    show: state.shows.selectedShow,
    showCasts: state.shows.showCasts,
    showDevs: state.shows.showDevelopers,
    showEpisodes: state.shows.showEpisodes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSelectedShow: (id) => dispatch(fetchSelectedShow(id)),
    fetchShowCasts: (id) => dispatch(fetchShowCasts(id)),
    fetchDevelopers: (id) => dispatch(fetchShowDevelopers(id)),
    fetchEpisodes: (id) => dispatch(fetchEpisodes(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
