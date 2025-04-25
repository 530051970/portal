import { Link, useNavigate } from "react-router-dom";
import { nav2Home } from "../utils";

const Deploy: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
        <header>
        <div className="header__main header-sticky header-main-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-8">
                <div className="logo">
                  <a
                    className="logo-text-white"
                    href=""
                    onClick={() => nav2Home(navigate)}
                  >
                    <img
                      src="/assets/img/logo/logo.png"
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
                          <Link to="/#module">功能模块</Link>
                        </li>
                        <li>
                          <Link to="/#feature">产品特色</Link>
                        </li>
                        <li>
                          <Link to="/#version">经典版本</Link>
                        </li>
                        <li>
                          <Link to="/deploy">部署记录</Link>
                        </li>
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
      <section className="service-box-area pt-140 pb-30" id="module">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div style={{ width: "100%", height: 80 }}></div>
                
              </div>
            </div>
          </div>
        </section></>
    );
}

export default Deploy;