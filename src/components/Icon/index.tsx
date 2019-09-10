import classNames from 'classnames';
import React, { Component } from 'react';
import './index.scss';

interface IconProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (ev: any) => void;
  [prop: string]: any;
}

class Icon extends Component<IconProps> {
  public render() {
    const { value, className, ...others } = this.props;
    return <i {...others} className={classNames('qt-icon', value, className)} />;
  }
}

export default Icon;
