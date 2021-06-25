import React from "react";
import { useHistory } from "react-router-dom";

const StatesGrid = ({ gridState, keywords }) => {
  const history = useHistory();

  function check(slug) {
    console.log(slug);
    history.push(`/cities/${slug}`);
	// Storing stateCode in the local storage for header
    localStorage.setItem("CurrentState", slug);
  }
  const search = (keywords) => (gridState) =>
    gridState.title.toLowerCase().includes(keywords);
  return (
    <div className="states-parent-grid-container">
      {gridState
        .filter(search(keywords))
        .map(({ id, code, title, slug, background }) => {
          return (
            <div
              key={id}
              className={`states-child-grid-container`}
              id={`child-${id}`}
            >
              <div
                style={{ background: background }}
                className="child child-1"
                onClick={() => check(slug)}
              >
                {code}
              </div>
              <div className="state-name">{title}</div>
            </div>
          );
        })}
    </div>
  );
};

export default StatesGrid;

/*	<div className="states-child-grid-container top-child" id="top-child-2">
				<div className="child child-2">AP</div>
				<div className="state-name">Andhra Pradesh</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-3">AR</div>
				<div className="state-name">Arunachal Pradesh</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-4">AS</div>
				<div className="state-name">Assam</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-5">BR</div>
				<div className="state-name">Bihar</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-6">CH</div>
				<div className="state-name">Chandigarh</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-7">CG</div>
				<div className="state-name">Chattisgarh</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-8">DN</div>
				<div className="state-name">Dadra and Nagar Haveli</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-9">DD</div>
				<div className="state-name">Daman and DILI</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-10">DL</div>
				<div className="state-name">Delhi</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-11">GA</div>
				<div className="state-name">Goa</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-12">GJ</div>
				<div className="state-name">Gujarat</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-13">HR</div>
				<div className="state-name">Haryana</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-14">HP</div>
				<div className="state-name">Himachal Pradesh</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-15">JK</div>
				<div className="state-name">Jammu & Kashmir</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-16">JH</div>
				<div className="state-name">Jharkand</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-17">KA</div>
				<div className="state-name">Karnataka</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-18">KL</div>
				<div className="state-name">Kerala</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-19">LD</div>
				<div className="state-name">Lakshadweep</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-20">MP</div>
				<div className="state-name">Madhya Pradesh</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-21">MH</div>
				<div className="state-name">Maharashtra</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-22">MM</div>
				<div className="state-name">Manipur</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-23">ML</div>
				<div className="state-name">Meghalaya</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-24">MZ</div>
				<div className="state-name">Mizoram</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-25">NL</div>
				<div className="state-name">Nagaland</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-26">OR</div>
				<div className="state-name">Orissa</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-27">PY</div>
				<div className="state-name">Pondicherry</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-28">PB</div>
				<div className="state-name">Punjab</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-29">RJ</div>
				<div className="state-name">Rajasthan</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-30">SK</div>
				<div className="state-name">Sikkim</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-31">TN</div>
				<div className="state-name">Tamil Nadu</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-32">TS</div>
				<div className="state-name">Telengana</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-33">TR</div>
				<div className="state-name">Tripura</div>
			</div>

			<div className="states-child-grid-container">
				<div className="child child-34">UP</div>
				<div className="state-name">Uttar Pradesh</div>
			</div>

			<div className="states-child-grid-container" id="bottom-child-1">
				<div className="child child-35">WB</div>
				<div className="state-name">West Bengal</div>
			</div>

			<div className="states-child-grid-container" id="bottom-child-2">
				<div className="child child-36">XX</div>
				<div className="state-name">Other</div>
			</div>*/
