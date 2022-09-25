import { apiRequest } from "../../helpers/connections";
import { authSliceActions } from "../../store/auth/auth";
import { notificationActions } from "../../store/notification/notification";

export const formHandler = async (e, setLoading, dispatch) => {
  e.preventDefault();
  setLoading(true);
  const form = new FormData(e.target);
  const strongPassword = new RegExp(
    /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).{6,16}$/
  );
  if (strongPassword.test(form.get("password"))) {
    const body = {};
    for (const key of form.keys()) {
      body[key] = form.get(key);
    }

    const data = await apiRequest("auth/login", body, "post");
    if (data.status.message === "User Not Verified") {
      setLoading(false);
    } else if (typeof data === "object") {
      if (data.user.isverified) {
        const auth = {};
        auth.state = true;
        auth.token = data.token;
        auth.user = data.user;
        dispatch(authSliceActions.setLoggedIn(auth));
        dispatch(notificationActions.setMessage("Login Successful"));
        setLoading(false);
      } else {
        dispatch(notificationActions.setMessage("Invalid LogIn Credentials"));
      }
    } else {
      setLoading(false);

      dispatch(notificationActions.setMessage("Invalid LogIn Credentials"));
    }
  } else {
    dispatch(
      notificationActions.setMessage(
        "Password must have minimum of 6 characters, must contain capital letter, small letter, number and special character"
      )
    );

    setLoading(false);
  }
};
