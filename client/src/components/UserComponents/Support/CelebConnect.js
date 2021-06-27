import React, { useEffect, useState } from "react";
import HomeHeaderBootstrap from "../../reusableComponents/HomeHeaderBootstrap";
import PromotionCard from "../../reusableComponents/PromotionCard";
import RoundArrow from "../../../icons/Arrow.svg";
// Slider
import Slider from "react-slick";
import SliderSetting from "../../../Utils/SliderSetting";
// Data
import CelebConnectList from "../../Data/CelebConnectList";
// Css
import "./support.css";
const CelebConnect = () => {
  const [celebConnectList, setCelebConnectList] = useState([]);
  useEffect(() => {
    setCelebConnectList(CelebConnectList);
  }, [celebConnectList]);
  return (
    <div className="main-container">
      <div className="container">
        <HomeHeaderBootstrap />
        <PromotionCard
          header="Bulwank Foundation"
          img={RoundArrow}
          paragraph="In a country that a home to world's second-largest population when one of its largest enterprise providentially happens to be a philanthropic organisation, it raises hopes for promising and sustainable future"
          LinkToOrg="https://leher.org/"
        />
        <h3 className="text-light">Celeb Connect</h3>
        <div className="card card--dark celeb-connect-container">
          <Slider {...SliderSetting}>
            {celebConnectList.map((item, key) => {
              return (
                <div key={key}>
                  <p className="celeb-connect-content">{item.content}</p>
                  <div className="celeb-profile">
                    <img
                      className="celeb-profile-img"
                      src={`${item.user.userprofile}`}
                      alt={`Profile of ${item.user.name}`}
                    />
                    <div>
                      <h3 className="celeb-profile-name">{item.user.name}</h3>
                      <p className="celeb-profile-username">
                        {item.user.username}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="button-container">
          <button className="card__button">Want to ask something ?</button>
        </div>
      </div>
    </div>
  );
};

export default CelebConnect;
