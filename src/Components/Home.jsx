import React from "react";
import CoursesComponent from "./CoursesComponent";

function Home() {

  return (
    <main className="p-4 mt-4">
        <section className=" pt-5 d-flex flex-lg-row flex-md-row  flex-column justify-content-center align-items-center text-start">
          <div style={{maxWidth:"30rem"}}>
          <h1 className="fs-6">Most trusted education platform</h1>
          <h2 className="fs-1">Grow your advance career</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta iusto iste atque impedit accusantium ipsa excepturi facere, esse dolore.</p>
            <div className="btn-group d-flex gap-3" style={{width:"max-content"}}>
              <button className="btn btn-primary rounded">Join Free Now</button>
              <button className="btn btn-outline rounded"> Watch Demo</button>
            </div>
          </div>
          <div style={{minWidth:"30rem",position:"relative",top:"0",left:"0"}}>
            <img src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?size=626&ext=jpg&ga=GA1.2.675969270.1687239235&semt=sph" alt="student" style={{height:"24rem"}} />
            <img src="https://geeksui.codescandy.com/geeks/assets/images/background/acedamy-img/target.svg" alt="" style={{position:"absolute",right:"1rem",bottom:"16rem"}} />
          </div>
        </section>
        <br />
        <br />
        <h2 className="pt-5 mt-5">Some Popular courses</h2>
        <CoursesComponent/>
    </main>
  );
}

export default Home;

