import React, {PureComponent} from 'react';
import { connect } from "react-redux";
import { ClientVersionForm } from "../../models/Bo/HomeBo";
import * as Action from "./action";
import { Button } from "antd";
import "./index.scss";

interface Props {
  version: number;
  name: string;
  fetchClientVersion: (param: ClientVersionForm) => void;
}


class Home extends PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {

    }
  }
  public render() {
    return (
      <div className="home">
        name: { this.props.name }
        <br/>
        version: { this.props.version }
        <br/>
        <Button onClick={this.props.fetchClientVersion.bind(this, { name: "create-react-app", version: 3.1 })} type="primary">获取默认版本信息</Button>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    name: state.homeReducer.get('name'),
    version: state.homeReducer.get('version')
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchClientVersion: (form: ClientVersionForm) => dispatch(Action.fetchClientVersion(form)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home as any);