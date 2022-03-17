import React from "react";
import { Table } from "antd";
import "./Table.css";
import { connect } from "react-redux";
import {setCurrentPage} from '../../redux/settingsactions';

 function CreateTable(props) {
  const onChange = (e, filters) => {
      props.handleSetCurrentPage(e.current);
    if (!props.isSearch) {
      props.onPageChange(e, filters);
    } else {
      props.onSearchPage(e,true);
    }
  };
  return (
    <>
      <div className="container">
        <div>
          <Table
            rowKey={(record) => record._id}
            pagination={{ total: props.count, showSizeChanger: false }}
            columns={props.columns}
            dataSource={props.data}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}

const mapState = (state) => {
    return {
      current: state.current
    };
  };
  
  const mapDispatch = (dispatch) => ({
    handleSetCurrentPage: (payload) => {
      dispatch(setCurrentPage(payload));
    }
  });

export default connect(mapState, mapDispatch)(CreateTable)