import React from "react";
import { Input } from "antd";
import { connect } from "react-redux";
import {setSearchKey} from '../../redux/settingsactions';

const Search = Input.Search;

const TitleSearch = ({ onSearch, ...props }) => {
    const onChange = (e) => {
        props.handleSetSearchKey(e.target.value)
    }
    return (
        <div className="action">
          <Search
            placeholder="Enter country,population,capital or region"
            onSearch={(e) => onSearch(e,false)}
            onChange={onChange}
            style={{ width: 400 }}
          />
        </div>
      );
} 

const mapState = (state) => {
    return {
      current: state.current
    };
  };
  
  const mapDispatch = (dispatch) => ({
    handleSetSearchKey: (payload) => {
        dispatch(setSearchKey(payload));
      },
  });


export default connect(mapState, mapDispatch)(TitleSearch);
