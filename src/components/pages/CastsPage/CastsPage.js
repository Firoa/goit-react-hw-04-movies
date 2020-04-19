import React, { Component } from "react";
import * as Services from "../../services/services";
import Casts from "../../Casts/Casts";
const getMatchId = (props) => props.match.params.id;

class CastsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { casts: null };
    this.id = getMatchId(this.props);
  }
  componentDidMount() {
    Services.fetchCastById(this.id).then((data) => {
      this.setState({ casts: data });
    });
  }

  render() {
    const { casts } = this.state;   
    return <div>{!!casts && <Casts items={casts.cast} />}</div>;
  }
}

export default CastsPage;
