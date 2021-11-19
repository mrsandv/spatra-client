import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";

interface Props extends RouteProps {
  authenticated?: boolean;
  component:
    | React.ComponentClass<any>
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}: Props) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.isAuth === "true" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
