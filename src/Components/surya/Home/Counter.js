import React from 'react'
import CountUp from 'react-countup'; 

function Counter() {
  return (
    <section className="counter section-padding">
    <div className="container">
        <div className="counter-wrapper text-white mtm-30 text-center">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="single-fun-fact mb-4 mb-lg-0">
                        <h2><CountUp end={30} duration={3}></CountUp>K+</h2>
                        <h3>PROJECT DONE</h3>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="single-fun-fact mb-4 mb-lg-0">
                        <h2><CountUp end={980} duration={3}></CountUp>+</h2>
                        <h3>HAPPY CLIENTS</h3>
                    </div>
                </div>
                <div className="col-md-4  col-12 mb-4 mb-md-0">
                    <div className="single-fun-fact">
                        <h2><CountUp end={50} duration={3}></CountUp>+</h2>
                        <h3>Skilled Employee</h3>
                    </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-fun-fact">
                        <h2><CountUp end={98} duration={3}></CountUp>%</h2>
                        <h3>Country Coverage</h3>
                    </div>
                </div> */}
            </div>
        </div>
        </div>
        </section>
        )
}

export default Counter