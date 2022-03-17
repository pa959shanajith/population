import React from "react";
import { connect } from "react-redux";
import Controller from "./controller";
import "./home.css";
import Chart from "../../components/Charts";
import Table from "../../components/Table";
import TitleSearch from "../../components/Search";
import PopulationService from "../../services/populationService";
import ErrorBoundary from "../../components/Error";
import { Tag, Modal } from "antd";
import {
  setUserAuth,
  setCountryData,
  setCount,
  setCurrentPage,
  setSearchType,
  setSearchKey,
} from "../../redux/settingsactions";
class Home extends Controller {
  constructor() {
    super();
    this.state = {
      current: 1,
      error: null
    };

    this.PopulationService = new PopulationService();
  }

  componentDidMount() {
    this.getPopulationData({ page: this.props.current });
  }

  getPopulationData = (page) => {
    this.PopulationService.getPopulation(page)
      .then((res) => {
        if (res.status === 200) {
          this.props.handleAuth(true);
          this.props.handleCountryData(res.data.data);
          this.props.handleSetCount(res.data.count);
          this.props.handleSetSearchType(false);
        } else {
          this.props.handleSetSearchType(false);
          throw new Error("something went wrong");
        }
      })
      .catch((err) => {
        if (
          err.response.status === 401 ||
          err.response.data === "jwt expired"
        ) {
          Modal.info({
            title: "Session Expired",
            content: (
              <>
                <p>Sorry your session has been expired, please login again</p>
              </>
            ),
            onOk: () => {
              this.props.handleAuth(false);
            },
          });
        }
        this.setState({ error: "something went wrong" });
      });
  };

  getPageData = (pageObj, filters) => {
    this.getPopulationData({ page: pageObj.current });
  };

  onSearch = (obj) => {
    this.PopulationService.search(obj)
    .then((res) => {
      if (res.status === 200) {
        this.props.handleCountryData(res.data.data);
        this.props.handleSetCount(res.data.count);
      } else {
        this.setState({ searchType: false });
        throw new Error("something went wrong");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }



  handleSearch = (e,bool) => {
    const { searchKey } = this.props;
    if (searchKey.length) {
      this.props.handleSetSearchType(true);
      this.onSearch({key: searchKey,page:bool ? e.current:1})
    } else {
      // this.props.handleSetSearchKey("");
      this.getPopulationData({ page: this.state.current });
    }
  };

  render() {
    let { country_data, count, current, searchType } = this.props;

    let columns = [
      {
        title: "Flag",
        dataIndex: "flag",
      },
      {
        title: "Country",
        dataIndex: "country",
        sorter: (a, b) => a.country.length - b.country.length,
        width: "30%",
      },
      {
        title: "Population",
        render: (record) => (
          <Tag color={"green"} key={record.population}>
            {record.population}{" "}
          </Tag>
        ),
        sorter: (a, b) => a.population - b.population,
      },
      {
        title: "Capital",
        render: (text, record) => (
          <p>
            {record.capital && record.capital.length
              ? record.capital[0]
              : "N/A"}
          </p>
        ),
        sorter: (a, b) => a.capital[0].length - b.capital[0].length,
      },
      {
        title: "Region",
        dataIndex: "region",
        sorter: (a, b) => a.region.length - b.region.length,
      },
      {
        title: "Timezone",
        render: (record) => <p>{record.timezones[0]}</p>,
        sorter: (a, b) => {
          let [ahh, amm] = a.timezones[0]
            .split("UTC")[1]
            .split(")")[0]
            .split(":");
          let [bhh, bmm] = b.timezones[0]
            .split("UTC")[1]
            .split(")")[0]
            .split(":");
          return +ahh * 60 + amm - (+bhh * 60 + bmm);
        },
      },
    ];
    return (
      <>
        <div className="conatiner">
          <div className="table-wrapper">
            <ErrorBoundary>
              <header className="header">
                <h1 className="title_header">Country Population</h1>
                <TitleSearch
                  onSearch={this.handleSearch}
                />
              </header>
              <Table
                columns={columns}
                currentPage={current}
                data={country_data}
                count={count}
                isSearch={searchType}
                onPageChange={this.getPageData}
                onSearchPage={this.handleSearch}
              />
            </ErrorBoundary>
          </div>
          <hr style={{ margin: "20px 5px" }}></hr>
          <div className="chart-wrapper">
            <ErrorBoundary>
              <Chart populationData={country_data} />
            </ErrorBoundary>
            <p
              style={{
                textAlign: "center",
                marginTop: "30px",
                fontWeight: "bold",
              }}
            >
              population chart with overall country
            </p>
          </div>
        </div>
      </>
    );
  }
}

const mapState = (state) => {
  return {
    country_data: state.country_data,
    count: state.count,
    current: state.current,
    searchType: state.searchType,
    searchKey: state.searchKey,
  };
};

const mapDispatch = (dispatch) => ({
  handleAuth: (payload) => {
    dispatch(setUserAuth(payload));
  },
  handleCountryData: (payload) => {
    dispatch(setCountryData(payload));
  },
  handleSetCount: (payload) => {
    dispatch(setCount(payload));
  },
  handleSetCurrentPage: (payload) => {
    dispatch(setCurrentPage(payload));
  },
  handleSetSearchType: (payload) => {
    dispatch(setSearchType(payload));
  },
  handleSetSearchKey: (payload) => {
    dispatch(setSearchKey(payload));
  },
});

export default connect(mapState, mapDispatch)(Home);
