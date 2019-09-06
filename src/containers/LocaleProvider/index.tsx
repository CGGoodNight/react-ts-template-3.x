import * as React from 'react';
// react 国际化
import {addLocaleData, IntlProvider} from 'react-intl';

import { ConfigProvider } from 'antd';
import antd_enUS from 'antd/lib/locale-provider/en_US';
import antd_zh_CN from 'antd/lib/locale-provider/zh_CN';
import {connect} from "react-redux";

import * as en from 'react-intl/locale-data/en';// react-intl语言包
import * as zh from 'react-intl/locale-data/zh';// react-intl语言包
import zh_CN from '../../locales/zh_CN';// 个人配置
import en_US from '../../locales/en_US';// 个人配置
addLocaleData([...en, ...zh]);// 需要放入本地数据库
// antd 国际化
const antdLocaleConfig = {
  en: antd_enUS,
  zh: antd_zh_CN, // 默认采用中文

};
 // react intl 国际化
 const localeConfig = {
  en: en_US,
  zh: zh_CN,
};
interface IProps {
  language: string;
}
class LocaleProvider extends React.Component<IProps> {
 
  public render() {
    return (
      <ConfigProvider locale={antdLocaleConfig[this.props.language]}>
        <IntlProvider
          key={this.props.language}
          locale={this.props.language}
          messages={localeConfig[this.props.language]}
        >
          {this.props.children}
        </IntlProvider>
      </ConfigProvider>
    );
  }
}
const mapStateToProps = (state: any) => ({
  language: state.languageReducer.get("language")
})
export default connect(mapStateToProps)(LocaleProvider);