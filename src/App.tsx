import React, { useEffect } from 'react';
import './App.css'
// import Swiper from "swiper/bundle";
// import './App.js'
// import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollToTop from './pages/comp/ScrollToTop';
// import "@flaticon/flaticon-uicons/css/regular/rounded.css";
// import "@flaticon/flaticon-uicons/css/uicons-regular-rounded.css";
// import "@flaticon/flaticon-uicons/css/uicons-regular-rounded.css";


const App: React.FC = () => {
  useEffect(() => {

    // const dependencyScript = document.createElement("script");
    // dependencyScript.src = "/assets/js/swiper-bundle.js";
    // dependencyScript.async = true;
    // dependencyScript.onload = () => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  // }
  }, []);

  return (
    <>
    <ScrollToTop />
    <header>
        <div className="header__main header-sticky header-main-2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-8">
                        <div className="logo" style={{height:100}}>
                            <a className="logo-text-white" href="index.html">
                              <img src="/assets/img/logo/logo-orange.png" alt="" style={{width:150}}/>
                            </a>
                            <a className="logo-text-black" href="index.html">
                              <img src="/assets/img/logo/logo-text-black.png" alt="" style={{width:150}}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-9 col-4">
                        <div className="header__menu-area f-left none" style={{height:100}}>
                            <div className="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li className="menu-item-has-children"><a href="index.html">产品介绍</a>
                                            <ul className="sub-menu">
                                                <li><a href="">在线笔试</a></li>
                                                <li><a href="">在线面试</a></li>
                                                <li><a href="">职业测评</a></li>
                                                <li><a href="">问卷调查</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="">解决方案</a>
                                            <ul className="sub-menu">
                                               <li><a href="">校园招聘</a></li>
                                                <li><a href="">社会招聘</a></li>
                                                <li><a href="">性格测试</a></li>
                                                <li><a href="">人才盘点</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="">定价方案</a></li>
                                        <li ><a href="">行业题库</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            
                            <div className="header__btn d-none">
                                <a href="#" className="grb-btn">Get Reserved<i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="header__menu-area f-right" style={{height: 100}}>
                            <div className="custom" style={{float:"left",marginRight:3}}>
                               <a href="" className="grb-btn-2">进入控制台</a>
                               {/* <button className="draw" onClick={()=>{window.location.href='http://mis.leego.vip'}}>进入控制台</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className="fix">
        <div className="side-info">
            <div className="side-info-content">
                <div className="offset-widget offset-logo mb-30 pb-20">
                    <div className="row align-items-center">
                        <div className="col-9">
                          <a href="index.html">
                            <img src="/assets/img/logo/logo.png" alt="Logo"/>
                          </a>
                        </div>
                        <div className="col-3 text-end"><button className="side-info-close"><i
                                    className="fal fa-times"></i></button>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu d-lg-none"></div>
                <div className="offset-widget offset_searchbar mb-30">
                    <form method="get" action="#">
                        <div className="offset_search_content">
                            <input type="search" placeholder="What are you searching for?"/>
                            <button type="submit" className="offset_search_button"><i className="fal fa-search"></i></button>
                        </div>
                    </form>
                </div>

                <div className="offset-widget mb-40 d-none d-lg-block">
                    <div className="info-widget">
                        <h4 className="offset-title mb-20 d-none">About Us</h4>
                        <p className="mb-30">But I must explain to you how all this mistaken idea of
                            denouncing pleasure and
                            praising pain
                            was born and will give you a complete account of the system and expound the actual teachings
                            of the great
                            explore</p>
                        <a href="#" className="c-btn btn-round-02 d-none">Contact Us</a>
                    </div>
                </div>

                <div className="row side-gallery gx-4">
                    <div className="col-4 mb-20">
                        <div className="side-image">
                          <a className="popup-image" href="/assets/img/portfolio/pm1.jpg">
                            <img src="/assets/img/portfolio/pm1.jpg" alt="sidebar-img"/>
                          </a>
                        </div>
                    </div>
                    <div className="col-4 mb-20">
                        <div className="side-image">
                          <a className="popup-image" href="/assets/img/portfolio/pm2.jpg">
                            <img src="/assets/img/portfolio/pm2.jpg" alt="sidebar-img"/>
                          </a>
                        </div>
                    </div>
                    <div className="col-4 mb-20">
                        <div className="side-image">
                          <a className="popup-image" href="/assets/img/portfolio/pm3.jpg">
                            <img src="/assets/img/portfolio/pm3.jpg" alt="sidebar-img"/>
                          </a>
                        </div>
                    </div>
                    <div className="col-4 mb-20">
                        <div className="side-image">
                          <a className="popup-image" href="/assets/img/portfolio/pm4.jpg">
                            <img src="/assets/img/portfolio/pm4.jpg" alt="sidebar-img"/>
                          </a>
                        </div>
                    </div>
                    <div className="col-4 mb-20">
                        <div className="side-image">
                          <a className="popup-image" href="/assets/img/portfolio/pm5.jpg">
                            <img src="/assets/img/portfolio/pm5.jpg" alt="sidebar-img"/>
                          </a>
                        </div>
                    </div>
                    <div className="col-4 mb-20">
                        <div className="side-image">
                          <a className="popup-image" href="/assets/img/portfolio/pm6.jpg">
                            <img src="/assets/img/portfolio/pm6.jpg" alt="sidebar-img"/>
                          </a>
                        </div>
                    </div>
                </div>
                <div className="side-map mt-20 mb-30 d-none d-lg-block"></div>
                <div className="contact-infos mt-30 mb-30">
                    <div className="contact-list mb-30">
                        <h4>Contact Info</h4>
                        <a href="#" className="">
                            <i className="fal fa-map-marker-alt"></i>
                            <span>Johnson Super Street,
                                New York, USA 2344</span>
                        </a>
                        <a href="tel:(555)764890345" className="">
                            <i className="fal fa-phone-alt"></i>
                            <span>(555) 764 890 345</span>
                        </a>
                        <a href="mailto:info@domain.com" className="">
                            <i className="far fa-envelope"></i>
                            <span>info@domain.com</span>
                        </a>

                    </div>
                    <div className="grb__social footer-social offset-social">
                        <ul>
                            <li><a href="#"><i className="fab fa-weixin"></i></a></li>
                            <li><a href="#"><i className="fab fa-qq"></i></a></li>
                            <li><a href="#"><i className="fa fa-phone-alt"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="offcanvas-overlay"></div>
    <div className="search-wrap">
        <div className="search-inner">
            <i className="fal fa-times search-close" id="search-close"></i>
            <div className="search-cell">
                <form method="get">
                    <div className="search-field-holder">
                        <input type="search" className="main-search-input" placeholder="Search Your Keyword..."/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <main>
        <section className="hero-area p-relative">
            <div className="slider-active swiper-container">
                <div className="swiper-wrapper">
                    <div className="single-slider slider-height st-2 swiper-slide slider-overlay"
                        data-swiper-autoplay="5000">
                        {/* <div className="slide-bg" style={{backgroundImage:"url(/assets/img/hero/banner2.jpg)"}}></div> */}
                        <div className="slide-bg" data-background="assets/img/hero/banner2.jpg"></div>
                        <div className="banner3-shape">
                            <img src="/assets/img/shape/banner3-shape.png" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="hero-content text-center">
                                        <p data-animation="fadeInUp" data-delay=".3s">一站式在线笔试，在线面试平台</p>
                                        <h1 data-animation="fadeInUp" data-delay=".5s">招聘更智能、更专业</h1>
                                        <div className="hero-content-btn st-2" data-animation="fadeInUp" data-delay=".7s">
                                            <a href="" className="grb-btn">体验DEMO</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider slider-height st-2 swiper-slide slider-overlay"
                        data-swiper-autoplay="5000">
                        {/* <div className="slide-bg" style={{backgroundImage:"url(/assets/img/hero/banner3.jpg)"}}></div> */}
                        <div className="slide-bg" data-background="assets/img/hero/banner3.jpg"></div>
                        <div className="banner3-shape">
                            <img src="/assets/img/shape/banner3-shape.png" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="hero-content text-center">
                                        <p data-animation="fadeInUp" data-delay=".3s">智能测评，画像分析，人才盘点</p>
                                        <h1 data-animation="fadeInUp" data-delay=".5s">团队管理更加有温度</h1>
                                        <div className="hero-content-btn st-2" data-animation="fadeInUp" data-delay=".7s">
                                            <a href="" className="grb-btn">体验DEMO</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider slider-height st-2 swiper-slide slider-overlay"
                        data-swiper-autoplay="5000">
                        <div className="slide-bg" style={{backgroundImage: "/assets/img/hero/banner1.jpg"}}></div>
                        <div className="banner3-shape">
                            <img src="/assets/img/shape/banner3-shape.png" alt=""/>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="hero-content text-center">
                                        <p data-animation="fadeInUp" data-delay=".3s">多行业题库，历年真题，解析</p>
                                        <h1 data-animation="fadeInUp" data-delay=".5s">让您在考场如虎添翼</h1>
                                        <div className="hero-content-btn st-2" data-animation="fadeInUp" data-delay=".7s">
                                            <a href="" className="grb-btn">体验DEMO</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about__area st-2">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-xl-6 col-lg-5">
                        <div className="about__img p-relative mb-30">
                            <div className="about__img-inner st-2">
                                <img src="/assets/img/about/about-2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="about__content mb-30 st-2">
                            <div className="section-title mb-30">
                                <div className="border-left st-2">
                                    <p>选择我们的理由</p>
                                </div>
                                <h3>走在技术前沿，让科技成为生产力</h3>
                            </div>
                            <p>我们是来自一线互联网公司的技术极客，苦于技术不能更好的服务于市场，决定用最新的技术理念，最前沿的技术手段，解决长期以来用户在人才招聘，人才盘点，考前演练等方面的痛点，与市场上琳琅满目的产品使用老技术带来性能不稳定，数据不安全等风险相比，我们采用最近几年才流行的微服务，容器化，多租户等技术手段，用工匠精神通过技术手段，为您的日常运营添砖加瓦！</p>
                            <div className="ab-experience">
                                <div className="ab-experience-content">
                                    <div className="ab-experience-icon st-2">
                                        <i className="flaticon-trophy"></i>
                                    </div>
                                    <div className="ab-experience-text">
                                        <p><span className="st-2">15+</span>年行业工作经验</p>
                                    </div>
                                </div>
                                <p className="ab-experience-p">一群志同道合来自于相关领域的行业老炮，平均从业经验10年以上，对产品体验追求极致！</p>
                            </div>
                            <ul className="about-points st-2">
                                <li>
                                    <div className="points-heading">
                                        <div className="p-icon">
                                        <i className="flaticon-team"></i>
                                        </div>
                                        <h5>一流的技术支持</h5>
                                    </div>
                                    <p>7*24h技术支持，5分钟响应.</p>
                                </li>
                                <li>
                                    <div className="points-heading">
                                        <div className="p-icon">
                                            <i className="flaticon-creative-team"></i>
                                        </div>
                                        <h5>专业的业务背景</h5>
                                    </div>
                                    <p>数名专业测评大拿加盟，专利丰富</p>
                                </li>
                            </ul>
                            <div className="about__btn">
                                <a href="" className="grb-btn st-2">使用有问题？点这里
                                  <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="counter-board-area" style={{backgroundImage:"url(/assets/img/bg/counter-board-bg.jpg)"}}>
            <div className="container">
                <div className="row wow fadeInUp counter-board-content">
                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-board-single mb-40">
                            <i className="flaticon-add-group"></i>
                            <div className="counter-board-number"><span className="odometer" data-count="38">00</span>K+</div>
                            <p>在线用户</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-board-single mb-40">
                            <i className="flaticon-businessman"></i>
                            <div className="counter-board-number"><span className="odometer" data-count="90">00</span>+</div>
                            <p>企业用户</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-board-single mb-40">
                            <i className="flaticon-layers"></i>
                            <div className="counter-board-number"><span className="odometer" data-count="27">00</span>K+</div>
                            <p>行业题库</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="counter-board-single mb-40">
                            <i className="flaticon-trophy-1"></i>
                            <div className="counter-board-number"><span className="odometer" data-count="20">00</span>+</div>
                            <p>知识产权</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="service-box-area pt-120 pb-80">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <div className="section-title mb-55 text-center">
                            <div className="border-c-bottom st-2">
                                <p>我们在以下场景都可以帮到您</p>
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
                                    <h4><a href="service-details.html">校园招聘</a></h4>
                                    <p>灵活制定笔试时间；支持多种方式组卷，试题顺序随机，选项随机；启用摄像头，可以确保笔试过程中全程录像和多种防作弊策略；提交试卷后平台10s钟自动阅卷，并生成考试报告。</p>
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
                                    <h4><a href="service-details.html">社会招聘</a></h4>
                                    <p>生成试卷后可以批量邀请候选人参加笔试或面试；笔试过程中全程录像和多种防作弊策略；提交试卷后平台10s钟自动阅卷，并生成考试报告；支持自定义面试题库，万人同时在线。</p>
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
                                    <h4><a href="service-details.html">职业测评</a></h4>
                                    <p>面向大中型企业和培训机构，定期组织各种性格测试，党建主题活动测评以及业务测评，多维度全面评估测评对象，系统自动生成画像报告，群体报告，为决策者决策提供数据支撑。</p>
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
                                    <h4><a href="service-details.html">趣味测评/问卷调查</a></h4>
                                    <p>几分钟简单操作便可以生成一份问卷；支持多题型，支持多端；支持用户同时在线作答；实时统计调查结果；问卷模版自定义，还可以设置抽奖小礼品等。</p>
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
                                    <h4><a href="service-details.html">行业题库</a></h4>
                                    <p>帮助企业完成从0到1的出题及题库应用全周期管理。汇聚各行业模拟题，历年真题，并与业内人士合作，提供真题解析和考前指导，方便广大考生积极备考，为进入考场保驾护航。</p>
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
                                    <h4><a href="service-details.html">增值服务</a></h4>
                                    <p>平台会为客户提供一些免费的日常办公用的小插件，组织机构管理、工作流、邮件、一键审批等系统服务，提高工作效率，无纸化办公，与客户互相成长。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="choosing-fl-area">
            <div className="container-fluid choosing-container-2">
                <div className="row wow fadeInUp align-items-center">
                    <div className="col-lg-6">
                        <div className="choosing-fl-img p-relative">
                            <img src="/assets/img/about/choosing-fl.jpg" alt=""/>
                            <div className="choosing-video play_btn">
                                <a className="grb-video st-3 popup-video"
                                    href="#" onClick={()=>{console.log("播放视频")}} ><i className="fas fa-play"></i></a>
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
                                            <h5>领先的技术理念</h5>
                                            <p>采用前后端分离、微服务、容器化技术，利用k8s做服务编排，线上各服务健康状况24h监控，系统异常能做到分钟级响应。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="choosing__number">
                                            <span>02</span>
                                        </div>
                                        <div className="choosing__text">
                                            <h5>强大的安全机制</h5>
                                            <p>平台采用多租户分离理念，确保不同客户，客户不同组织之间的数据相互隔离，互不干扰，加密加盐机制确保用户数据安全。</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="choosing__number">
                                            <span>03</span>
                                        </div>
                                        <div className="choosing__text">
                                            <h5>完善的售后培训体系</h5>
                                            <p>系统文档完备，专业专人售后支持。定期举办线上线下产品使用沟通会，现场答疑。邀请业内人士举办各种讲座，培养用户心智。</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial-area st-2">
            <div className="container">
                <div className="row wow fadeInUp align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title mb-30">
                            <div className="border-left st-2">
                                <p>行业者说</p>
                            </div>
                            <h2>一些来自于客户的反馈</h2>
                        </div>
                        <div className="swiper-container testimonial-active-2 st-3">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-single st-2">
                                        <p className="mb-30">梨猫测评 是我用过的迭代非常快、体验非常好的在测评网站，没有之一。从项目生成，测评管理，试卷生成，到考后自动阅卷，自动生成报告，一气呵成，对用户非常友好，替公司节约了大量的人力成本。</p>
                                        <div className="testimonial-name">
                                            <h5>方女士 总监</h5>
                                            <p>北大纵横</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-single st-2">
                                        <p className="mb-30">每年的校招是人力部门最忙的时节，每年都投入了大量的人力异地出差招聘，投入的人力非常大。自从使用梨猫招聘系统，开启远程在线笔试面试，再也不用去学校做线下招聘了，而且系统自动阅卷，自动生成候选人职业能力画像，较好的支持了每年的大量招聘活动。希望平台越做越好，从企业出发，推出更多新的功能。</p>
                                        <div className="testimonial-name">
                                            <h5>李先生 HRBP</h5>
                                            <p>某互联网公司</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-nav-2">
                                <div className="testimonial2-btn-prev st-2"><i className="fal fa-angle-left"></i></div>
                                <div className="testimonial2-btn-next st-2"><i className="fal fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="testimonial-right p-relative">
                            <div className="test-i-img">
                                <img src="/assets/img/testimonial/test-i-img.jpg" alt=""/>
                            </div>
                            <div className="testimonial-right-img p-relative">
                                <img src="/assets/img/testimonial/test-r-img.jpg" alt=""/>
                                <div className="testimonial-quote pos-2 st-2">
                                    <i className="fal fa-quote-left"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="hire-area" style={{backgroundImage:"url(/assets/img/bg/hire-bg.jpg)"}}>
            <div className="container">
                <div className="row wow fadeInUp justify-content-center">
                    <div className="col-lg-8 col-md-11">
                        <div className="hire-content text-center">
                            <div className="section-title mb-55">
                                <h2 className="white-color">您是否也有一些天马行空的想法?</h2>
                            </div>
                            <div className="hire-btn">
                                <a href="contact.html" className="grb-btn st-3">加入我们</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="portfolio-st-2 pt-120 pb-115 grey-bg">
            <div className="container">
                <div className="row wow fadeInUp justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title mb-40 text-center">
                            <div className="border-c-bottom st-2">
                                <p>我们的产品</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp">
                    <div className="button-group portfolio-button">
                        <button className="active" data-filter="*">全部</button>
                        <button data-filter=".c-1">笔试面试</button>
                        <button data-filter=".c-2">职业测评</button>
                        <button data-filter=".c-3">问卷调查</button>
                        <button data-filter=".c-4">行业题库</button>
                        <button data-filter=".c-5">增值服务</button>
                    </div>
                </div>
                <div className="row wow fadeInUp grid">
                    <div className="col-lg-4 col-md-6 grid-item c-1 c-2 c-3 c-4" style={{position: "absolute",left: 0, top: 0}}>
                        <div className="portfolio-item mb-30">
                            <div className="portfolio-item-img p-relative">
                                <img src="/assets/img/portfolio/p-1.jpg" alt=""/>
                                <div className="portfolio-hover-contnet">
                                    <div className="portfolio-hover-inner text-center">
                                        <h5 className="portfolio-hover-heading">
                                            <a href="portfolio-details.html">题库管理系统</a>
                                        </h5>
                                        <p>支持多种题型，可以手工倒入试题，也可以批量上传</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item c-1 c-2 c-4 c-3" style={{position: "absolute",left: 400, top: 0}}>
                        <div className="portfolio-item mb-30">
                            <div className="portfolio-item-img p-relative">
                                <img src="/assets/img/portfolio/p-2.jpg" alt=""/>
                                <div className="portfolio-hover-contnet">
                                    <div className="portfolio-hover-inner text-center">
                                        <h5 className="portfolio-hover-heading">
                                            <a href="portfolio-details.html">试卷生成引擎</a>
                                        </h5>
                                        <p>兼容随机抽题、指定题型等多种抽题方式，自由组合，确保试卷千人千面</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item c-1 c-2 c-3" style={{position: "absolute",left: 800, top: 0}}>
                        <div className="portfolio-item mb-30">
                            <div className="portfolio-item-img p-relative">
                                <img src="/assets/img/portfolio/p-3.jpg" alt=""/>
                                <div className="portfolio-hover-contnet">
                                    <div className="portfolio-hover-inner text-center">
                                        <h5 className="portfolio-hover-heading">
                                            <a href="portfolio-details.html">考试管理系统</a>
                                        </h5>
                                        <p>指定时间段，指定时间点组织考试，提供智能监控系统，确保全流程可追踪</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item c-2 c-4" style={{position: "absolute",left: 0, top: 280}}>
                        <div className="portfolio-item mb-30">
                            <div className="portfolio-item-img p-relative">
                                <img src="/assets/img/portfolio/p-4.jpg" alt=""/>
                                <div className="portfolio-hover-contnet">
                                    <div className="portfolio-hover-inner text-center">
                                        <h5 className="portfolio-hover-heading">
                                            <a href="portfolio-details.html">自动阅卷系统</a>
                                        </h5>
                                        <p>测评提交之后系统自动评卷，10秒之后出报告，并给出解析标准</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item c-2 c-3" style={{position: "absolute",left: 800, top: 280}}>
                        <div className="portfolio-item mb-30">
                            <div className="portfolio-item-img p-relative">
                                <img src="/assets/img/portfolio/p-5.jpg" alt=""/>
                                <div className="portfolio-hover-contnet">
                                    <div className="portfolio-hover-inner text-center">
                                        <h5 className="portfolio-hover-heading">
                                            <a href="portfolio-details.html">画像报告平台</a>
                                        </h5>
                                        <p>分用户，群体等维度提供检测报告，并可以自定义报告模板，适应多种场景</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-see-all">
                    <a href="portfolio.html" className="grb-border-btn st-2">
                        查看全部
                    </a>
                </div>
            </div>
        </section>
        <section className="pricing-area pt-60">
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
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row g-0">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-pricing mb-10">
                                            <div className="pricing-title">
                                                <h5>在线笔试</h5>
                                                <span>¥10</span><span style={{color:"grey",fontSize:14}}>/人/次</span>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>题库管理</li>
                                                <li>试卷生成</li>
                                                <li>测评中心&线上测评&智能监控</li>
                                                <li>自动化阅卷</li>
                                                <li>分析报告</li>
                                                <li>智能邀约</li>
                                            </ul>
                                            <div className="pricing-btn text-center">
                                                <a href="contact.html" className="grb-border-btn st-1">
                                                   免费试用
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-pricing mb-30">
                                            <div className="pricing-title">
                                                <h5>在线面试</h5>
                                                <span>¥15</span><span style={{color:"grey",fontSize:14}}>/人/次</span>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>面试问题集管理</li>
                                                <li>面试问题抽选</li>
                                                <li>1VS1视频</li>
                                                <li>在线编程体验</li>
                                                <li>面试结果评价</li>
                                                <li>面试邀约&面试官邀请</li>
                                            </ul>
                                            <div className="pricing-btn text-center">
                                                <a href="contact.html" className="grb-border-btn st-1">
                                                   免费试用
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-pricing mb-30">
                                            <div className="pricing-title">
                                                <h5>智能测评</h5>
                                                <span>¥20</span><span style={{color:"grey",fontSize:14}}>/人/次</span>
                                            </div>
                                            <ul className="pricing-list">
                                                 <li>题库管理</li>
                                                <li>试卷生成</li>
                                                <li>测评中心&线上测评&智能监控</li>
                                                <li>自动化阅卷</li>
                                                <li>分析报告</li>
                                                <li>智能邀约</li>
                                            </ul>
                                            <div className="pricing-btn text-center">
                                                <a href="contact.html" className="grb-border-btn st-1">
                                                   免费试用
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="single-pricing mb-30">
                                            <div className="pricing-title">
                                                <h5>问卷调查</h5>
                                                <span>¥2</span><span style={{color:"grey",fontSize:14}}>/人/次</span>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>多端（H5/小程序/IOS/安卓）组卷</li>
                                                <li>题库管理</li>
                                                <li>一键分享</li>
                                                <li>智能邀约</li>
                                                <li>分析报告</li>
                                                <li>智能抽奖</li>
                                            </ul>
                                            <div className="pricing-btn text-center">
                                                <a href="contact.html" className="grb-border-btn st-1">
                                                   免费试用
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog-area blog-area-2 pt-120">
            <div className="container">
                <div className="row wow fadeInUp justify-content-center counter-head">
                    <div className="col-lg-6 col-md-8">
                        <div className="blog-left">
                            <div className="section-title mb-55 text-center">
                                <div className="border-c-bottom st-2">
                                    <p>高速发展的大中小公司都在使用</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="brand-area pt-10 pb-100">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-12">
                        <div className="swiper-container brand-active">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand1.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand1-wc.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand2.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand2-wc.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand3.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand3-wc.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand4.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand4-wc.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand5.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand5-wc.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand1.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand1-wc.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand2.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand2-wc.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand3.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand3-wc.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand4.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand4-wc.png" alt=""/></a>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="single-brand">
                                        <a href="#"><img src="/assets/img/brand/brand5.png" alt=""/></a>
                                        <a href="#"><img src="/assets/img/brand/brand5-wc.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <section className="footer-area pt-100 pb-60">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget mb-40">
                            <div className="footer-logo">
                                <a href="index.html">
                                    <img src="/assets/img/logo/logo-footer.png" alt="" style={{width:150}}/>
                                </a>
                            </div>
                            <p>梨猫平台，致力于用最新的技术手段打造极致体验的行业标准，让科技成为生产力，为企业个人提供便利有效的解决方案</p>
                            <div className="grb__social footer-social-2">
                                <ul>
                                    <li><a href="#"><i className="fab fa-weixin"></i></a></li>
                                    <li><a href="#"><i className="fab fa-qq"></i></a></li>
                                    <li><a href="#"><i className="fa fa-phone-alt"></i></a></li>
    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget mb-40">
                            <div className="footer-widget-title">
                                <h4>关注我们</h4>
                            </div>
                            <div>
                                <img src="/assets/img/wechat/xiaochengxu.jpg" alt="" style={{width: 150,paddingTop: 10}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget mb-40 fw3">
                            <div className="footer-widget-title">
                                <h4>思维碰撞</h4>
                            </div>
                            <div>
                                <img src="/assets/img/wechat/personal.png" alt="" style={{width: 150,paddingTop: 10}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget mb-40">
                            <div className="footer-widget-title">
                                <h4>资讯快报</h4>
                            </div>
                            <p>输入邮件地址，可以第一时间掌握产品迭代信息、报价变更消息、还有更多促销活动哦～</p>
                            <form className="subscribe-form mb-30 st-2">
                                <input type="text" placeholder="请输入您的邮箱..."/>
                                <button type="submit"><i className="fas fa-paper-plane"></i>订阅</button>
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
                            <p>&copy; <script>document.write(new Date().getFullYear());</script> 之岸(上海)信息技术有限公司&nbsp;&nbsp;沪ICP备18054806号-8</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ul className="copyright-list f-right st-2">
                            <li><a href="contact.html">联系我们</a></li>
                            <li><a href="#">数据安全</a></li>
                            <li><a href="about.html">用户隐私</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default App
