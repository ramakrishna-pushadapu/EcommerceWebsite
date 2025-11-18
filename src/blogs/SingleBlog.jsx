import React, { useState } from "react";
import { useParams } from "react-router-dom";
import blogList from "../utilis/blogdata";
import PageHeader from "../assets/components/PageHeader";
import Tags from "../shop/tags/Tags";
import PopularPost from "../shop/popularpost/PopularPost";
import "../blog/SingleBlog.css";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog] = useState(blogList);
  const { id } = useParams();

  //  ensure id comparison works even if id is a string
  const result = blog.filter((b) => String(b.id) === String(id));

  return (
    <div>
      <PageHeader title="Single Blog Page" curPage="Blog / Blog Details" />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <article>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        {result.map((item) => (
                          <div key={item.id}>
                            <div className="post-thumb">
                              <img src={item.imgUrl} alt={item.title} />
                            </div>

                            <div className="post-content">
                              <h3>{item.title}</h3>

                              <div className="meta-post">
                                <ul className="lab-ul">
                                  {item.metaList?.map((val, j) => (
                                    <li key={j}>
                                      <i className={val.iconName}></i>{" "}
                                      {val.text}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <p>
                                Serenity hasir taken posesson mying entre soung
                                these sweet mornngs sprng whch enoywith whole
                                heart create am alones and feel the charm of
                                extencteth spot which the blissoulse like
                                mineing am soo happy my dearsi frend absoribed
                                the exquste sense enjoy my whole hearts alone
                                and fee the charm of exstenceths spotsi whch was
                                the blis of souils mineing amsoing dear frend
                                soingup absoribed the exqust sense tranqui
                                existence neglect my talentsr should ncapable
                                ofing is drawng singe wonderful serenty has
                                taken possession of my entre souling these sweet
                                present moment and yet feel that never was
                                greater artst.
                              </p>

                              <blockquote>
                                <p>
                                  Dynamically recapitualize distributed
                                  technologies whereas turnkey channels
                                  holistically provide access to resource
                                  leveling expertise via worldwide deliverables.
                                </p>
                                <cite>
                                  <a href="#">...Melissa Hunter</a>
                                </cite>
                              </blockquote>

                              <p>
                                whole heart create am alones and feel the charm
                                of extenctech spot which the blissous like
                                mineing am soo happy my dearsi frend absoribed
                                the exquste sense enjoy my whole hearts alone
                                and fee the charm of exstenceths spotsi whch was
                                the blis of souils mineing amsoing dear frend
                                soingup absoribed the exqust sense tranqui
                                existence neglect my talentsr should ncapable
                                ofing is drawng singe wonderful serenty has
                                taken possession of my entre souling these sweet
                                present moment and yet feel that never was
                                greater artst
                              </p>

                              <img
                                src="/src/assets/images/blog/single/01.jpg"
                                alt="Blog detail"
                                className="my-4"
                              />

                              <p>
                                Serenity hasir taken poseson mying entre soung
                                these sweet mornngs sprng whch enoywith whole
                                heart create am alones and feel the charm of
                                extencteth spot whch the blissous like mineing
                                am soo happy my dearsi frend absoribed the
                                exquste sense enjoy my whole hearts alone and
                                fee the charm of exstenceths spotsi whch was the
                                blis of souils mineing amsoing dear frend soingu
                                absoribed the exqust sense tranqui existence
                                neglect my talentsr should ncapable ofing is
                                drawng singe wonderful serenty has taken
                                possession of my entre souling these sweet
                                present moment and yet feel that never was
                                greater artst.
                              </p>

                              <div className="video-thumb">
                                <img
                                  src="/src/assets/images/blog/single/02.jpg"
                                  alt="Blog video"
                                />
                                <a
                                  href="https://youtu.be/_W3R2VwRyF4"
                                  className="video-button popup"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="icofont-ui-play"></i>
                                </a>
                              </div>

                              <p>
                                Building something meaningful starts with a calm
                                and focused mind. Every moment of creation,
                                whether it’s designing a product or writing a
                                single line of code, holds the joy of
                                craftsmanship.
                              </p>

                              <div className="tags-section">
                                <ul className="tags lab-ul">
                                  <li>
                                    <a href="#">Agency</a>
                                  </li>
                                  <li>
                                    <a href="#">Business</a>
                                  </li>
                                  <li>
                                    <a href="#">Personal</a>
                                  </li>
                                </ul>

                                <ul className="lab-ul social-icons">
                                  {socialList.map((val, i) => (
                                    <li key={i}>
                                      <a
                                        href={val.link}
                                        className={val.className}
                                      >
                                        <i className={val.iconName}></i>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="navigations-part d-flex justify-content-between mt-5">
                      <div className="left">
                        <a href="#" className="prev d-block mb-2">
                          <i className="icofont-double-left"></i> Previous Blog
                        </a>
                      </div>
                      <div className="right text-end">
                        <a href="#" className="next d-block mb-2">
                          Next Blog <i className="icofont-double-right"></i>
                        </a>
                      </div>
                      <div className="matter">
                        <p>
                          Holistically Extend Market-driven Solutions with
                          Strategic Synergy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-12">
            <aside>
              <Tags />
              <PopularPost />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
