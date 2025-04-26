import { useEffect } from "react";
import ScrollToTop from "../comp/ScrollToTop";
import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { nav2Home } from "../utils";

export const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
    // }
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // 去掉 `#`
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const navigate = useNavigate();

  const startConfig = () => {
    navigate("/configure");
  };

  return (
    <>
      <ScrollToTop />
      <header>
        <div className="header__main header-sticky header-main-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-8">
                <div className="logo">
                  <a
                    className="logo-text-white"
                    onClick={() => nav2Home(navigate)}
                  >
                    <img
                      src="/assets/img/logo/logo.png"
                      alt=""
                      style={{ width: 150 }}
                    />
                  </a>
                  <a
                    className="logo-text-black"
                    onClick={() => nav2Home(navigate)}
                  >
                    <img
                      src="/assets/img/logo/logo-2.png"
                      alt=""
                      style={{ width: 150 }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9 col-4">
                <div
                  className="header__menu-area f-left none"
                  style={{ height: 100 }}
                >
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <a href="#module">功能模块</a>
                        </li>
                        <li>
                          <a href="#feature">产品特色</a>
                        </li>
                        <li>
                          <a href="#version">经典版本</a>
                        </li>
                        {/* <li>
                          <Link to="/deploy">部署记录</Link>
                        </li> */}
                        <li>
                          <Link to="/docs">使用指南</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <div className="header__btn d-none">
                    <a href="#" className="grb-btn">
                      Get Reserved<i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="header__menu-area f-right"
                  style={{ height: 100 }}
                >
                  <div
                    className="custom"
                    style={{ float: "left", marginRight: 3 }}
                  >
                    <a href="" className="grb-btn-2">
                      体验中心
                    </a>
                    {/* <button className="draw" onClick={()=>{window.location.href='http://mis.leego.vip'}}>进入控制台</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="offcanvas-overlay"></div>
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fal fa-times search-close" id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search Your Keyword..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <main>
        <section className="hero-area p-relative">
          <div className="slider-active swiper-container">
            <div className="swiper-wrapper">
              <div
                className="single-slider slider-height st-2 swiper-slide slider-overlay"
                data-swiper-autoplay="5000"
                style={{
                  backgroundColor: "#040021",
                }}
              >
                {/* <div className="slide-bg" style={{backgroundImage:"url(/assets/img/hero/banner2.jpg)"}}></div> */}
                {/* <div className="slide-bg" data-background="assets/img/hero/banner2.jpg"></div> */}
                <div className="banner3-shape">
                  <img src="/assets/img/shape/banner3-shape.png" alt="" />
                </div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="hero-content text-center">
                        <p data-animation="fadeInUp" data-delay=".3s">
                          面向云原生的基础能力建设之
                        </p>
                        <div data-animation="fadeInUp" data-delay=".5s">
                          <div
                            style={{
                              fontSize: 90,
                              fontWeight: 900,
                              color: "white",
                            }}
                          >
                            多通道身份校验系统
                          </div>
                        </div>
                        <div className="introduce">
                          <span>
                            AuthHub是一款精心设计的无缝对接AWS云服务,
                            开箱即用的身份认证解决方案
                          </span>
                          <br />
                          <span>
                            支持多身份认证，拥有高颜值的自定义页面且无需引入其他框架的产品理念
                          </span>
                          <br />
                          <span>
                            基于稳定生产的商业项目升级优化而来，更加贴近企业级的需求
                          </span>
                        </div>
                        <div style={{ marginBottom: 20, fontSize: 13 }}>
                          <span style={{ color: "white" }}>
                            当前版本 4.5.0.RELEASE
                          </span>
                          &nbsp;&nbsp;
                          <a href="#">
                            <span style={{ color: "#EC008C" }}>GITHUB</span>
                            &nbsp;&nbsp;
                            <Link to="/deploy">
                              <span style={{ color: "#EC008C" }}>更新日志</span>
                            </Link>
                            &nbsp;&nbsp;
                            <Link to="/deploy">
                              <span style={{ color: "#EC008C" }}>部署记录</span>
                            </Link>
                          </a>
                        </div>
                        <div
                          className="hero-content-btn st-2"
                          data-animation="fadeInUp"
                          data-delay=".7s"
                        >
                          <a
                            href=""
                            className="grb-btn"
                            onClick={() => startConfig()}
                          >
                            开始定制
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-box-area pt-120 pb-80" id="module">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-lg-12">
                <div className="section-title mb-55 text-center">
                  <div className="border-c-bottom st-2">
                    <p>功能模块</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp">
              <div className="col-lg-4 col-md-6">
                <div className="service-box-single mb-40">
                  <div className="service-box-content">
                    <div className="service-box-content-icon">
                      <i className="flaticon-idea"></i>
                    </div>
                    <div className="service-box-content-text">
                      <h4>
                        <a href="service-details.html">用户管理</a>
                      </h4>
                      <p>
                        支持自建用户池，包含新增用户/部门/角色，删除用户/部门/角色，修改用户权限/部门/角色等基本功能，也支持用户更换部门/角色以及由此带来的一整套变更。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box-single mb-40">
                  <div className="service-box-content">
                    <div className="service-box-content-icon">
                      <i className="flaticon-consultation"></i>
                    </div>
                    <div className="service-box-content-text">
                      <h4>
                        <a href="service-details.html">多通道身份认证</a>
                      </h4>
                      <p>
                        用户可以自由选择一种或多种诸如用户名/密码登录，手机验证码登录，以及第三方IDP厂商账号登录，也支持滑动条/验证码等高级功能限制用户登录频次。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box-single mb-40">
                  <div className="service-box-content">
                    <div className="service-box-content-icon">
                      <i className="flaticon-healthcare"></i>
                    </div>
                    <div className="service-box-content-text">
                      <h4>
                        <a href="service-details.html">接口鉴权</a>
                      </h4>
                      <p>
                        对于已经完成身份认证的用户，提供细粒度的接口鉴权，支持RBAC模式以及角色政策，确保拥有对应权限的用户才能使用指定的接口进行符合要求的操作。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box-single mb-40">
                  <div className="service-box-content">
                    <div className="service-box-content-icon">
                      <i className="flaticon-analytics"></i>
                    </div>
                    <div className="service-box-content-text">
                      <h4>
                        <a href="service-details.html">MFA多因素认证</a>
                      </h4>
                      <p>
                        支持要求用户提供两个或多个不同类型的凭据（知识因子/持有因子/生物因子）来证明身份，防止账户被盗，提高数据安全性。在企业账户中，MFA已成为必备安全措施
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box-single mb-40">
                  <div className="service-box-content">
                    <div className="service-box-content-icon">
                      <i className="flaticon-digital-marketing"></i>
                    </div>
                    <div className="service-box-content-text">
                      <h4>
                        <a href="service-details.html">企业级SSO认证</a>
                      </h4>
                      <p>
                        员工只需要登录一次，就能访问多个企业应用（比如邮件、文档、CRM、财务系统等），通过统一身份认证，提高安全性，方便
                        IT 部门控制权限，防止未经授权的访问。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box-single mb-40">
                  <div className="service-box-content">
                    <div className="service-box-content-icon">
                      <i className="flaticon-web-maintenance"></i>
                    </div>
                    <div className="service-box-content-text">
                      <h4>
                        <a href="service-details.html">日志监控</a>
                      </h4>
                      <p>
                        实时收集、分析用户的行为日志，帮助企业发现问题、排查故障、检测异常行为，提高系统稳定性和安全性。它能自动告警，让运维团队第一时间发现异常。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="choosing-fl-area" id="feature">
          <div className="container-fluid choosing-container-2">
            <div className="row wow fadeInUp align-items-center">
              <div className="col-lg-6">
                <div className="choosing-fl-img p-relative">
                  <img src="/assets/img/about/choosing-fl.jpg" alt="" />
                  <div className="choosing-video play_btn">
                    <a
                      className="grb-video st-3 popup-video"
                      href="#"
                      onClick={() => {
                        console.log("播放视频");
                      }}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choosing-fl-right mt-40 mb-40">
                  <div className="section-title mb-30">
                    <div className="border-left st-3">
                      <p>不同于其他产品</p>
                    </div>
                    <h2 className="white-color">我们有着以下优势</h2>
                  </div>
                  <div className="choosing__information st-2">
                    <ul>
                      <li>
                        <div className="choosing__number">
                          <span>01</span>
                        </div>
                        <div className="choosing__text">
                          <h5>极致的用户体验</h5>
                          <p>
                            提供高颜值的交互页面，避免过多中间跳转，也可以通过简单的配置自定义主题风格，所见即所得，所得即所需。
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="choosing__number">
                          <span>02</span>
                        </div>
                        <div className="choosing__text">
                          <h5>强大的安全机制 </h5>
                          <p>
                            平台支持采用HTTPS/敏感信息加盐加密机制，确保用户数据安全，利用云平台的安全机制提升用户的数据安全。
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="choosing__number">
                          <span>03</span>
                        </div>
                        <div className="choosing__text">
                          <h5>一键部署开箱即用</h5>
                          <p>
                            云原生无缝对接云端部署，也支持本地部署。简单的页面傻瓜式操作几分钟即可搭建企业级身份认证系统。
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="portfolio-area-slide pt-120 pb-90 grey-bg">
          <div className="container">
            <div className="row wow fadeInUp justify-content-center">
              <div className="col-lg-8">
                <div className="section-title mb-55 text-center">
                  <div className="border-c-bottom st-3">
                    <p>交互效果</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-slide-wrapper p-relative">
              <div className="swiper-container portfolio-slide">
                <div className="swiper-wrapper">
                  <div className="swiper-slide-pages">
                    <div className="portfolio-slide-single p-relative mb-30">
                      <img src="assets/img/pages/demo-login.png" alt="" /> */}
        {/* <div className="portfolio-slide-single-content">
                        <div className="portfolio-slide-inner">
                          <div className="cbg-shape">
                            <img src="assets/img/shape/cbg-shape.png" alt="" />
                          </div> */}
        {/* <div className="icon-link text-center">
                            <a
                              className="popup-image"
                              href="assets/img/portfolio/psi1.jpg"
                            >
                              <i className="fal fa-plus"></i>
                            </a>
                          </div> */}
        {/* <div className="portfolio-slide-single-text">
                            <span>UI/UX Design</span>
                            <h5>
                              <a href="portfolio-details.html">
                                Mobile User Interface
                              </a>
                            </h5>
                          </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div>
                  </div>
                  <div className="swiper-slide-pages">
                    <div className="portfolio-slide-single p-relative mb-30">
                      <img
                        src="assets/img/portfolio/demo-register.png"
                        alt="" */}
        {/* /> */}
        {/* <div className="portfolio-slide-single-content">
                        <div className="portfolio-slide-inner">
                          <div className="cbg-shape">
                            <img src="assets/img/shape/cbg-shape.png" alt="" />
                          </div>
                          {/* <div className="icon-link text-center">
                            <a
                              className="popup-image"
                              href="assets/img/portfolio/psi2.jpg"
                            >
                              <i className="fal fa-plus"></i>
                            </a>
                          </div> */}
        {/*<div className="portfolio-slide-single-text">
                            <span>UI/UX Design</span>
                            <h5>
                              <a href="portfolio-details.html">
                                Mobile User Interface
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div> */}
        {/* </div>
                  </div>
                  <div className="swiper-slide-pages">
                    <div className="portfolio-slide-single p-relative mb-30">
                      <img src="assets/img/portfolio/demo-findPWD.png" alt="" /> */}
        {/* <div className="portfolio-slide-single-content">
                        <div className="portfolio-slide-inner">
                          <div className="cbg-shape">
                            <img src="assets/img/shape/cbg-shape.png" alt="" />
                          </div> */}
        {/* <div className="icon-link text-center">
                            <a
                              className="popup-image"
                              href="assets/img/portfolio/psi3.jpg"
                            >
                              <i className="fal fa-plus"></i>
                            </a>
                          </div> */}
        {/* <div className="portfolio-slide-single-text">
                            <span>UI/UX Design</span>
                            <h5>
                              <a href="portfolio-details.html">
                                Mobile User Interface
                              </a>
                            </h5>
                          </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div>
                  </div>
                  <div className="swiper-slide-pages">
                    <div className="portfolio-slide-single p-relative mb-30">
                      <img src="assets/img/pages/demo-login.png" alt="" />
                      <div className="portfolio-slide-single-content">
                        <div className="portfolio-slide-inner">
                          <div className="cbg-shape">
                            <img src="assets/img/shape/cbg-shape.png" alt="" />
                          </div> */}
        {/* <div className="icon-link text-center">
                            <a
                              className="popup-image"
                              href="assets/img/portfolio/psi1.jpg"
                            >
                              <i className="fal fa-plus"></i>
                            </a>
                          </div> */}
        {/* <div className="portfolio-slide-single-text">
                            <span>UI/UX Design</span>
                            <h5>
                              <a href="portfolio-details.html">
                                Mobile User Interface
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide-pages">
                    <div className="portfolio-slide-single p-relative mb-30">
                      <img src="assets/img/portfolio/psi2.jpg" alt="" />
                      <div className="portfolio-slide-single-content">
                        <div className="portfolio-slide-inner">
                          <div className="cbg-shape">
                            <img src="assets/img/shape/cbg-shape.png" alt="" />
                          </div> */}
        {/* <div className="icon-link text-center">
                            <a
                              className="popup-image"
                              href="assets/img/portfolio/psi2.jpg"
                            >
                              <i className="fal fa-plus"></i>
                            </a>
                          </div> */}
        {/* <div className="portfolio-slide-single-text">
                            <span>UI/UX Design</span>
                            <h5>
                              <a href="portfolio-details.html">
                                Mobile User Interface
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide-pages">
                    <div className="portfolio-slide-single p-relative mb-30">
                      <img src="assets/img/portfolio/psi3.jpg" alt="" />
                      <div className="portfolio-slide-single-content">
                        <div className="portfolio-slide-inner">
                          <div className="cbg-shape">
                            <img src="assets/img/shape/cbg-shape.png" alt="" />
                          </div>
                          <div className="icon-link text-center">
                            <a
                              className="popup-image"
                              href="assets/img/portfolio/psi3.jpg"
                            >
                              <i className="fal fa-plus"></i>
                            </a>
                          </div>
                          <div className="portfolio-slide-single-text">
                            <span>UI/UX Design</span>
                            <h5>
                              <a href="portfolio-details.html">
                                Mobile User Interface
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-slide-nav">
                <div className="swipper-nav-arrow swiper-button-prev ">
                  <i className="fal fa-angle-left"></i>
                </div>
                <div className="swipper-nav-arrow swiper-button-next">
                  <i className="fal fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <section className="pricing-area pt-60" id="version">
          <div className="container">
            <div className="pricing-inner">
              <div className="row wow fadeInUp">
                <div className="col-lg-7 col-md-8">
                  <div className="section-title mb-10">
                    <div className="border-left st-2">
                      <p>为您提供了性价比高的套餐</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-plans wow fadeInUp">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row g-0">
                      <div className="col-lg-4 col-md-6">
                        <div className="single-pricing mb-10">
                          <div className="pricing-title">
                            <h5>社区版</h5>
                            <img
                              src="/assets/img/vip/vip0.png"
                              style={{ height: 50 }}
                            />

                            {/* <span>¥10</span><span style={{color:"grey",fontSize:14}}>/人/次</span> */}
                          </div>
                          <ul className="pricing-list">
                            <li>用户名登录</li>
                            <li>短信验证码登录</li>
                            <li>IDP账号登录</li>
                            <li>第三方登录</li>
                            <li>接口鉴权</li>
                            <li>自定义交互UI</li>
                          </ul>
                          {/* <div className="pricing-btn text-center">
                                                    <a href="contact.html" className="grb-border-btn st-1">
                                                       免费试用
                                                    </a>
                                                </div> */}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-pricing mb-30">
                          <div className="pricing-title">
                            <h5>旗舰版</h5>
                            <img
                              src="/assets/img/vip/vip1.png"
                              style={{ height: 50 }}
                            />
                            {/* <span>¥15</span><span style={{color:"grey",fontSize:14}}>/人/次</span> */}
                          </div>
                          <ul className="pricing-list">
                            <li>用户名登录</li>
                            <li>短信验证码登录</li>
                            <li>IDP账号登录</li>
                            <li>第三方登录</li>
                            <li>接口鉴权</li>
                            <li>自定义交互UI</li>
                            <li>MFA多因素验证</li>
                          </ul>
                          {/* <div className="pricing-btn text-center">
                                                    <a href="contact.html" className="grb-border-btn st-1">
                                                       免费试用
                                                    </a>
                                                </div> */}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-pricing mb-30">
                          <div className="pricing-title">
                            <h5>企业版</h5>
                            <img
                              src="/assets/img/vip/vip2.png"
                              style={{ height: 50 }}
                            />
                            {/* <span>¥20</span><span style={{color:"grey",fontSize:14}}>/人/次</span> */}
                          </div>
                          <ul className="pricing-list">
                            <li>用户名登录</li>
                            <li>短信验证码登录</li>
                            <li>IDP账号登录</li>
                            <li>第三方登录</li>
                            <li>接口鉴权</li>
                            <li>自定义交互UI</li>
                            <li>MFA多因素验证</li>
                            <li>企业级SSO登录</li>
                            <li>日志监控</li>
                            <li>多语言支持</li>
                          </ul>
                          {/* <div className="pricing-btn text-center">
                                                    <a href="contact.html" className="grb-border-btn st-1">
                                                       免费试用
                                                    </a>
                                                </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className="footer-area pt-100 pb-60">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-logo">
                    <a href="" onClick={() => nav2Home}>
                      <img
                        src="/assets/img/logo/logo-footer.png"
                        alt=""
                        style={{ width: 150 }}
                      />
                    </a>
                  </div>
                  <p>
                    致力于用最新的技术手段打造极致体验的行业标准，让科技成为生产力，为企业个人提供便利有效的解决方案
                  </p>
                  <div className="grb__social footer-social-2">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-weixin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-qq"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-phone-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-widget-title">
                    <h4>关注B站</h4>
                  </div>
                  <div>
                    <img
                      src="/assets/img/wechat/b.png"
                      alt=""
                      style={{ width: 150, paddingTop: 10 }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget mb-40 fw3">
                  <div className="footer-widget-title">
                    <h4>思维碰撞</h4>
                  </div>
                  <div>
                    <img
                      src="/assets/img/wechat/wx.png"
                      alt=""
                      style={{ width: 150, paddingTop: 10 }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-widget-title">
                    <h4>资讯快报</h4>
                  </div>
                  <p>
                    输入邮件地址，可以第一时间掌握产品迭代信息、报价变更消息、还有更多促销活动哦～
                  </p>
                  <form className="subscribe-form mb-30 st-2">
                    <input type="text" placeholder="请输入您的邮箱..." />
                    <button type="submit" style={{ paddingTop: 0 }}>
                      <i className="fas fa-paper-plane"></i>订阅
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="copyright-area st-2">
          <div className="container">
            <div className="row wow fadeInUp align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-text st-2">
                  <p>
                    &copy;{" "}
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    作者：進撃の巴图鲁 亚马逊云科技&nbsp;&nbsp;IBT团队技术工程师
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="copyright-list f-right st-2">
                  <li>
                    <a href="contact.html">联系我们</a>
                  </li>
                  <li>
                    <a href="#">数据安全</a>
                  </li>
                  <li>
                    <a href="about.html">用户隐私</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
