import React from "react";
import LeaveReviewForm from "../components/LeaveReviewForm.js";
import logo from "../assets/logo.png";
import BasePage from "./BasePage.js";

const LeaveReview = () => {
  return (
    <>
      <BasePage>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
              <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Leave a Review
              </h1>
            </div>
            <LeaveReviewForm />
          </div>
        </div>
      </BasePage>
    </>
  );
};

LeaveReview.propTypes = {};

export default LeaveReview;
