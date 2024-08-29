import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is include
import SingleCard from "../Common/SingleCard";
import Pagination from "../Common/Pagination";

const LotteryMarkets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Set this based on your data
  const [entries, setEntries] = useState(10); // Number of entries dropdown

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Fetch or filter data based on the new page number here
  };

  const handleEntriesChange = (event) => {
    setEntries(event.target.value);
    // Handle entries per page change here
  };

  return (
    <SingleCard>
      <SingleCard style={{}}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          {/* Search Bar */}
          <div className="input-group" style={{ maxWidth: "300px" }}>
            <input type="text" className="form-control" placeholder="Search" />
          </div>

          {/* Create Market Button */}
          <div className="d-flex align-items-center">
            <button
              className="btn btn-light rounded-circle me-2"
              style={{
                backgroundColor: "#e6f7ff",
                border: "1px solid #4682B4",
              }}
            >
              <i className="fas fa-plus" style={{ color: "#4682B4" }}></i>
            </button>
            <span style={{ color: "#4682B4", fontWeight: "bold" }}>
              Create Market
            </span>
          </div>

          {/* Entries Dropdown */}
          <div className="input-group" style={{ maxWidth: "150px" }}>
            <select className="form-select">
              <option value="10">10 entries</option>
              <option value="25">25 entries</option>
              <option value="50">50 entries</option>
            </select>
          </div>
        </div>
      </SingleCard>
      <SingleCard>
        <div className="default-according arrow_style" id="accordionoc">
          <div className="card">
            <div className="card-header parpel_bg ">
              <h5 className="mb-0">
                <button
                  className="btn text_white collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseicon"
                  aria-expanded="false"
                  aria-controls="collapse11"
                >
                  <i className="far fa-user-circle me-2" /> Demo Lottery Game
                  <span className="digits">1</span>
                </button>
              </h5>
            </div>
            <div
              className="collapse"
              id="collapseicon"
              aria-labelledby="collapseicon"
              data-parent="#accordionoc"
              style={{}}
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header parpel_bg ">
              <h5 className="mb-0">
                <button
                  className="btn collapsed text_white"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseicon1"
                  aria-expanded="false"
                >
                  <i className="far fa-user-circle me-2" /> Demo Lottery Game
                  <span className="digits">2</span>
                </button>
              </h5>
            </div>
            <div
              className="collapse"
              id="collapseicon1"
              aria-labelledby="headingeight"
              data-parent="#accordionoc"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header parpel_bg ">
              <h5 className="mb-0">
                <button
                  className="btn collapsed text_white"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseicon2"
                  aria-expanded="false"
                  aria-controls="collapseicon2"
                >
                  <i className="far fa-user-circle me-2" /> Demo Lottery Game
                  <span className="digits">3</span>
                </button>
              </h5>
            </div>
            <div
              className="collapse"
              id="collapseicon2"
              data-parent="#accordionoc"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header parpel_bg ">
              <h5 className="mb-0">
                <button
                  className="btn collapsed text_white"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseicon3"
                  aria-expanded="false"
                  aria-controls="collapseicon3"
                >
                  <i className="far fa-user-circle me-2" /> Demo Lottery Game
                  <span className="digits">4</span>
                </button>
              </h5>
            </div>
            <div
              className="collapse"
              id="collapseicon3"
              data-parent="#accordionoc"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header parpel_bg ">
              <h5 className="mb-0">
                <button
                  className="btn collapsed text_white"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseicon4"
                  aria-expanded="false"
                  aria-controls="collapseicon4"
                >
                  <i className="far fa-user-circle me-2" /> Demo Lottery Game
                  <span className="digits">5</span>
                </button>
              </h5>
            </div>
            <div
              className="collapse"
              id="collapseicon4"
              data-parent="#accordionoc"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </SingleCard>

      <div style={{ marginTop: "20px" }}>
        {" "}
        {/* Adjust the margin value as needed */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </SingleCard>
  );
};

export default LotteryMarkets;
