import React from "react";
import "./homePage.css";
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";
import HomePageContainer from "../../components/container/HomePageContainer";
import Banner from "../../components/banner/Banner";
import Slider from "../../components/book-slider/Slider";
import SecondSlider from "../../components/book-slider/SecondSlider";
import PromotionSection from "../../components/promotion/PromotionSection";
import CustomCarousel from "../../components/carousel/CustomCarousel";
import LatestBlogs from "../../components/blog/LatestBlogs";
import Footer from "../../components/footer/Footer";
import VideoSection from "../../components/yt-video/VideoSection";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "What Is Life?",
      type: "Type 10",
      originalPrice: 21.0,
      salePrice: 19.0,
      image: "/images/bookCover.webp",
    },
    {
      id: 2,
      title: "Blew In The Wind",
      type: "Type 7",
      price: 29.0,
      image: "/images/bookCover.webp",
    },
    {
      id: 3,
      title: "Pyramid",
      type: "Type 5",
      price: 50.0,
      image: "/images/bookCover.webp",
    },
    {
      id: 4,
      title: "The Golden Memorise",
      type: "Type 2",
      price: 80.0,
      image: "/images/bookCover.webp",
    },
  ];

  return (
    <>
      <Header />

      <HomePageContainer />

      <Features />

      <Banner />

      <Slider title={"Flash Sale Offer"} />

      <VideoSection />

      <SecondSlider books={books} />

      <PromotionSection />

      <Slider title={"Limited Time offer"} />

      <CustomCarousel />

      <LatestBlogs />

      <Footer />
    </>
  );
};

export default HomePage;
