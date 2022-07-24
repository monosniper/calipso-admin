import * as React from "react";
import { Route } from 'react-router-dom';
import FeedbackAnswer from "../components/feedBacks/FeedbackAnswer";

export default [
    <Route exact path="/feedbacks/:id/answer" component={FeedbackAnswer} />,
];