import React, { Component } from "react";
import Reviev from "../../components/Reviev/Reviev";
import * as Services from "../../services/services";
const getMatchId = (props) => props.match.params.id;

class ReviewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { revievs: null };
    this.id = getMatchId(this.props);
  }
  componentDidMount() {
    Services.fetchRevievsById(this.id).then((data) => {
      this.setState({ revievs: data });
    });
  }
  componentDidUpdate(prevProps,prevState){
      if(prevState.revievs !== this.state.revievs)
      {
      }
  }
  render() {
    const { revievs } = this.state;
    return <div> {!!revievs && <Reviev items={revievs} />}</div>;
  }
}

export default ReviewsPage;
