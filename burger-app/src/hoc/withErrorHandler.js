import React, { Fragment, Component, useState, useEffect } from "react";
import Model from "../components/UI/modal/Model";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    const req = axios.interceptors.request.use(
      (req) => {
        setError(null);
        return req;
      },
      (error) => {
        setError(error);
      }
    );
    const resp = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        setError(error);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(req);
        axios.interceptors.response.eject(resp);
      };
    }, [req, resp]);

    const clearError = () => {
      setError(error);
    };
    return (
      <Fragment>
        <Model modelClosed={clearError} show={error}>
          {error ? error.message : null}
        </Model>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default withErrorHandler;
