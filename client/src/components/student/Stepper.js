import React from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import StepIndicator from "./StepIndicator";
import ChooseYourBusiness from "./ChooseYourBusiness";
import StudentMenu from "./studentMenu";
import Questions_New from "../Q&A/Questions_New";
import Questions_Existing from "../Q&A/Questions_Existing";
import MyPitch from "./myPitch";
import MyProfile from "./profile";

import "../../assets/css/_global.css";

const Stepper = ({ setAuth }) => {
    console.log("test1: " , location);
	return (
		<div className="stepper">
			<div className="mainContainer">
                <StepIndicator />
				<div className="output">
					<Route exact path="/dashboard">
						First Step
                            <div>
                                <ChooseYourBusiness />
                            </div>
						<div className="btnContainer">
							<Link to="/dashboard/step2">Next</Link>
						</div>
					</Route>
					<Route exact path="/dashboard/step2">
                        Second Step
                        <div className="d-flex">
                                <div>
                                <Questions_New />
                            </div>
                        </div>
						<div className="btnContainer">
							<Link to="/dashboard">Back</Link>
							<Link to="/dashboard/step3">Next</Link>
						</div>
					</Route>
					<Route exact path="/dashboard/step3">
						Third Step
						<div className="btnContainer">
							<Link to="/dashboard/step2">Back</Link>
							<Link to="/dashboard/step4">Next</Link>
						</div>
					</Route>
                    <Route exact path="/dashboard/step4">
                        Fourth Step
						<div className="btnContainer">
							<Link to="/dashboard/step3">Back</Link>
							<Link to="/dashboard/step5">Next</Link>
						</div>
                    </Route>
					<Route exact path="/dashboard/step5">
						Finish Line
						<div className="btnContainer">
                            <Link to="/dashboard/step4">Back</Link>
							<Link to="/dashboard/step5">Finish</Link>
						</div>
					</Route>
				</div>
			</div>
		</div>
	);
};

export default Stepper;
