import React, { useEffect, useState } from "react";
import Percent from "../components/Percent";
import { getAdmins, getIntervals, getValues } from "../services/api";
import Interval from "../components/Interval";
import LoginForm from "../components/LoginForm";

export default function Setup() {
  
  const [values, setValues] = useState([]);
  const [intervals, setIntervals] = useState([]);

  // login
  const [user, setUser] = useState({ username: "", password: "" });
  const [admins, setAdmins] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    loadPercents();
    loadIntervals();
    loadAdmins();
  }, []);

  const loadPercents = () => getValues().then((v) => setValues(v.data));
  const loadIntervals = () => getIntervals().then((v) => setIntervals(v.data));
  const loadAdmins = () => getAdmins().then((v) => setAdmins(v.data));

  const Login = (details) => {
    if (
      details.name === admins[0].username &&
      details.pass === admins[0].password
    ) {
      setUser(details);
    } else {
      console.log("Details do not match!");
      setError("Oups!! Utilisateur ou mot de passe erroné");
    }
  };

  const LogOut = () => {
    setUser({});
  };

  const fv1 = values?.filter((x) => x?.id === "x3m1");
  const fv2 = values?.filter((x) => x?.id === "x6m1");
  const fv3 = values?.filter((x) => x?.id === "x9m1");
  const fv4 = values?.filter((x) => x?.id === "x12m1");
  const fv5 = values?.filter((x) => x?.id === "x3m2");
  const fv6 = values?.filter((x) => x?.id === "x6m2");
  const fv7 = values?.filter((x) => x?.id === "x9m2");
  const fv8 = values?.filter((x) => x?.id === "x12m2");
  const fv9 = values?.filter((x) => x?.id === "x3m3");
  const fv10 = values?.filter((x) => x?.id === "x6m3");
  const fv11 = values?.filter((x) => x?.id === "x9m3");
  const fv12 = values?.filter((x) => x?.id === "x12m3");
  const min = intervals?.filter((x) => x?.id === "min");
  const mid = intervals?.filter((x) => x?.id === "mid");
  const max = intervals?.filter((x) => x?.id === "max");

  return (
    <div className="container">
      {user.username !== "" ? (
        <form className="mt-3 mb-3" onSubmit={LogOut}>
          <div className="mt-2 border border-2 rounded-3 p-4">
            <form className="row align-items-center">
              <Interval interval={min[0]?.value} id={min[0]?.id} iLabel="De" />
              <Interval interval={mid[0]?.value} id={mid[0]?.id} iLabel="à" />
            </form>
            <form className="row mt-3">
              <Percent
                percent={fv1[0]?.value}
                ide={fv1[0]?.id}
                mlabel="3 mois"
              />
              <Percent
                percent={fv2[0]?.value}
                ide={fv2[0]?.id}
                mlabel="6 mois"
              />
              <Percent
                percent={fv3[0]?.value}
                ide={fv3[0]?.id}
                mlabel="9 mois"
              />
              <Percent
                percent={fv4[0]?.value}
                ide={fv4[0]?.id}
                mlabel="12 mois"
              />
            </form>
          </div>
          <div className="mt-3 border border-2 rounded-3 p-4">
            <form className="row align-items-center">
              <Interval interval={mid[0]?.value} id={mid[0]?.id} iLabel="De" />
              <Interval interval={max[0]?.value} id={max[0]?.id} iLabel="à" />
            </form>
            <form className="row mt-3">
              <Percent
                percent={fv5[0]?.value}
                ide={fv5[0]?.id}
                mlabel="3 mois"
              />
              <Percent
                percent={fv6[0]?.value}
                ide={fv6[0]?.id}
                mlabel="6 mois"
              />
              <Percent
                percent={fv7[0]?.value}
                ide={fv7[0]?.id}
                mlabel="9 mois"
              />
              <Percent
                percent={fv8[0]?.value}
                ide={fv8[0]?.id}
                mlabel="12 mois"
              />
            </form>
          </div>
          <div className="mt-3 border border-2 rounded-3 p-4">
            <form className="row align-items-center">
              <Interval
                interval={max[0]?.value}
                id={max[0]?.id}
                iLabel="A partir de"
              />
            </form>
            <form className="row mt-3">
              <Percent
                percent={fv9[0]?.value}
                ide={fv9[0]?.id}
                mlabel="3 mois"
              />
              <Percent
                percent={fv10[0]?.value}
                ide={fv10[0]?.id}
                mlabel="6 mois"
              />
              <Percent
                percent={fv11[0]?.value}
                ide={fv11[0]?.id}
                mlabel="9 mois"
              />
              <Percent
                percent={fv12[0]?.value}
                ide={fv12[0]?.id}
                mlabel="12 mois"
              />
            </form>
          </div>
          <div className="mt-3">
            <button type="submit" class="btn btn-danger">
              Quitter
            </button>
          </div>
        </form>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
