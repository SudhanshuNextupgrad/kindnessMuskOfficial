
import React, { useEffect, useState } from 'react';
import styles from '../styles/app.module.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { homePageService } from "@/store/services/homepageServices";
import { Spinner } from "react-bootstrap";

import Layout from "@/layout/layoutTemplate";

const Ourteam = () => {
  const [activePerson, setActivePerson] = useState(null);
  const [data, setData] = useState([]);
  const [isSubmitingLoader, setIsSubmitingLoader] = useState(false);

  const getMeetExecutive = async () => {
    setIsSubmitingLoader(true)
    try {
      let params = {};
      params.sectionName = "DescAccomplishment";
      const response = await homePageService.homePageDescAccomp(params);

      if (response?.data?.success) {
        let dataResp = response?.data?.data;
        let meetExeutiveData = dataResp.filter(
          (item) => item.sectionName == "MeetExecutive"
        );

        console.log("meet excutive data", meetExeutiveData);
        setData(meetExeutiveData);

      } else {
        alert("unable to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
    setIsSubmitingLoader(false);
  };

  useEffect(() => {
    getMeetExecutive();
  }, []);



  const toggleOverlay = (person) => {
    setActivePerson(activePerson === person ? null : person);
  };

  return (
    <Layout>
      {isSubmitingLoader ? (
        <div className="overlay">
          <div className="spinner-container">
            <Spinner
              className="loaderSpinnerPiyush"
              style={{
                width: "100px",
                height: "100px",
                color: "#0a1c51fc",
              }}
              animation="border"
            />
          </div>
        </div>
      ) : null}

      <div className={styles.container}>
        <div className='text-center mt-4 h4 text-uppercase fw-bolder'>
          <h2  className='ourTeam'>Our Team</h2>
        </div>

        <div className={styles.main}>

          <div className={styles.content}>
            {
              data.map((item, index) => {
                return (
                  <div className={styles.person} onClick={() => toggleOverlay(item.column_1)} key={index} style={{ transition: '.4s ease' }}>

                    <img src={process.env.SITE_URL + item.media} alt="image" />
                    <div className={`${styles.personName} mb-1 w-100 text-center p-2`}>
                      <span className='mx-2'>{item.column_1}</span>
                      <FaArrowRightLong color="white" className={`${styles.arrow}`} />
                    </div>

                    {activePerson === item.column_1 && (
                      <div className={styles.overlay}>
                        <div className={styles.title}>
                          <h5>{item.column_1}</h5>
                          <p>{item.column_2}</p>
                        </div>
                        <div className={styles.des}>
                          <p>{item.description}</p>

                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            }


            {/* <div className={styles.person} onClick={() => toggleOverlay('Calmetta')}>
                <img src='/first.jpg' alt="Calmetta Coleman" />
                <div className={styles.personName}>Calmetta Coleman</div><FaArrowRightLong color="white" fontSize="1.5em" />
                {activePerson === 'Calmetta' && (
                  <div className={styles.overlay}>
                    <div className={styles.title}>
                      <h5>Calmetta Coleman</h5>
                      <p>President & CEO</p>
                    </div>
                    <div className={styles.des}>
                      <p>Description for Calmetta Coleman goes here.</p>
                    </div>
                  </div>
                )}
              </div> */}

            {/* <div className={styles.person} onClick={() => toggleOverlay('Stephanie')}>
                <img src='/10721.jpg' alt="Stephanie Robinson" />
                <div className={styles.personName}>Stephanie Robinson</div><FaArrowRightLong color="white" fontSize="1.5em" />
                {activePerson === 'Stephanie' && (
                  <div className={styles.overlay}>
                    <div className={styles.title}>
                      <h5>Stephanie Robinson</h5>
                      <p>President & CEO</p>
                    </div>
                    <div className={styles.des}>
                      <p>Description for Stephanie Robinson goes here.</p>
                    </div>
                  </div>
                )}
              </div> */}

          </div>
        </div>
      </div>
      {/* <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.content}>
              <div className={styles.person} onClick={() => toggleOverlay('Lional')}>
                <img src='/nine.jpg' alt="Lional Kimble" />
                <div className={styles.personName}><span>Karen Freeman-Wilson</span></div><FaArrowRightLong color="white" fontSize="1.5em" />
                {activePerson === 'Lional' && (
                  <div className={styles.overlay}>
                    <div className={styles.title}>
                      <h5>Karen Freeman-<br />Wilson</h5>
                      <p>President & CEO</p>
                    </div>
                    <div className={styles.des}>
                      <p>The Honorable Karen Freeman-Wilson began serving as President and CEO of the Chicago Urban League in January 2020. She brings a passion for equity and social justice to the organization, which works to achieve equity for Black families and communities through social and economic empowerment.</p>
                      <p>Having served in the public arena most of her professional life, Freeman-Wilson has deep experience in addressing issues that impact urban communities. She was mayor of her hometown of Gary, Indiana, from 2012 through 2019. She was the first female to lead the city of Gary and the first African-American female mayor in the state of Indiana.  Her mayoral accomplishments included job creation, completion of a $100 million airport runway relocation, and the development of key areas in the city. She also previously served as Indiana Attorney General, Director of the Indiana Civil Rights Commission and presiding judge of the Gary City Court.   She also served as CEO of the National Association of Drug Court Professionals and Executive Director of the National Drug Court Institute.</p>
                      <p>Freeman-Wilson is a graduate of Harvard College and Harvard Law School.  She is a past President of the National League of Cities and past Chairperson of the Criminal and Social Justice Committee of the U.S. Conference of Mayors.  She is a member of Israel C.M.E. Church; Delta Sigma Theta Sorority, Inc.; the Links, Inc.; the NAACP; the Urban League of Northwest Indiana and the Indiana Bar.</p>
                      <p>Freeman-Wilson and her husband Carmen Wilson II have a blended family of four children.  </p>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.person} onClick={() => toggleOverlay('Kellay')}>
                <img src='/eight.jpg' alt="Kelly Evens" />
                <div className={styles.personName}>Calmetta Coleman</div><FaArrowRightLong color="white" fontSize="1.5em" />
                {activePerson === 'Kellay' && (
                  <div className={styles.overlay}>
                    <div className={styles.title}>
                      <h5>Calmetta Coleman</h5>
                      <p>President & CEO</p>
                    </div>
                    <div className={styles.des}>
                      <p>Description for Calmetta Coleman goes here.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.person} onClick={() => toggleOverlay('angela')}>
                <img src='/four.jpg' alt="Angela Hamilton" />
                <div className={styles.personName}>Stephanie Robinson</div>
                <FaArrowRightLong color="white" fontSize="1.5em" fontWeight={400} />

                {activePerson === 'angela' && (
                  <div className={styles.overlay}>
                    <div className={styles.title}>
                      <h5>Stephanie Robinson</h5>
                      <p>President & CEO</p>
                    </div>
                    <div className={styles.des}>
                      <p>Description for Stephanie Robinson goes here.</p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div> */}

    </Layout>

  );
};

export default Ourteam;
