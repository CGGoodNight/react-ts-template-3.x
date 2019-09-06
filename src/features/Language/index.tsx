import { DatePicker, Select, TimePicker} from 'antd';
import * as React from "react";
import {FormattedMessage, injectIntl } from "react-intl";
import {connect} from "react-redux";
import * as Action from "./action";
import languageType from "../../constants/languageType";


const Option = Select.Option;

interface IProps {
  changeLanguage: (lang: string) => void;
  language: string;
}

class Language extends React.Component<IProps> {
  public onLanguageChange = (lang: string) =>{
    this.props.changeLanguage(lang);
  }
  public render() {
    return(
      <div>
        <Select
          value={this.props.language}
          onChange={this.onLanguageChange}
          className="language-select"
        >
          <Option value={languageType.ZH}>简体中文</Option>
          <Option value={languageType.EN}>English</Option>
        </Select>
        <br/>
        <FormattedMessage id="demo.switch_language" />
        <DatePicker />
        <TimePicker />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  language: state.languageReducer.get("language")
})
const mapDispatchToProps = (dispatch: any) => ({
  changeLanguage(lang: string) {
    dispatch(Action.changeLanguage(lang));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Language as any));
