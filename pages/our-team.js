
import React, { useState } from 'react';
import styles from '../styles/app.module.css';
import { FaArrowRightLong } from "react-icons/fa6";

import Layout from "@/layout/layoutTemplate";

const App = () => {
  const [activePerson, setActivePerson] = useState(null);

  const toggleOverlay = (person) => {
    setActivePerson(activePerson === person ? null : person);
  };

  return (
    <Layout>
      <>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.content}>
              <div className={styles.person} onClick={() => toggleOverlay('Karen')}>
                <img src='/twe.jpg' alt="Karen Freeman-Wilson" />
                <div className={styles.personName}><span>Karen Freeman-Wilson</span></div>
                <FaArrowRightLong color="white" fontSize="1.5em" />
                {activePerson === 'Karen' && (
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

              <div className={styles.person} onClick={() => toggleOverlay('Calmetta')}>
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
              </div>

              <div className={styles.person} onClick={() => toggleOverlay('Stephanie')}>
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
              </div>

            </div>
          </div>
        </div>
        <div className={styles.container}>
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
        </div>
      </>
    </Layout>

  );
};

export default App;
