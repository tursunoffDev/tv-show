import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import { fetchSelectedPerson } from "@/redux";
import PersonCard from "@/components/PersonCard";

function PersonDetails({ loading, fetchPerson, person }) {
  const { id } = useParams();

  useEffect(() => {
    fetchPerson(id);

    // eslint-disable-next-line
  }, []);

  return <>{loading ? <Loader /> : <PersonCard person={person} />}</>;
}

const mapStateToProps = (state) => {
  return {
    loading: state.shows.loading,
    person: state.shows.castPerson,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPerson: (id) => dispatch(fetchSelectedPerson(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);
