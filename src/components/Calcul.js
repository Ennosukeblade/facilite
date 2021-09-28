
import React, {useState, useEffect} from "react";
import { getValues, getIntervals } from "../services/api";

export default function Calcul() {
  const [values, setValues] = useState([]);
  const [intervals, setIntervals] = useState([]);

  useEffect(() => {
    loadPercents();
    loadIntervals();
    console.log("render!!!");
  }, []);

  const loadPercents = () => getValues().then((v) => setValues(v.data));
  const loadIntervals = () => getIntervals().then((v) => setIntervals(v.data));
  console.log(values);
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

  let [prix, setPrix] = useState(0);
  let [price, setPrice] = useState({
    p3: "",
    p6: "",
    p9: "",
    p12: "",
  });
  const tab = (e) => {
    e.preventDefault();

    if (prix >= min[0].value && prix < mid[0].value) {
      setPrice({
        ...price,
        p3: (prix / 3) * fv1[0].value,
        p6: (prix / 6) * fv2[0].value,
        p9: (prix / 9) * fv3[0].value,
        p12: (prix / 12) * fv4[0].value,
      });
    } else if (prix >= mid[0].value && prix < max[0].value) {
      setPrice({
        ...price,
        p3: (prix / 3) * fv5[0].value,
        p6: (prix / 6) * fv6[0].value,
        p9: (prix / 9) * fv7[0].value,
        p12: (prix / 12) * fv8[0].value,
      });
    } else if (prix >= max[0].value) {
      setPrice({
        ...price,
        p3: (prix / 3) * fv9[0].value,
        p6: (prix / 6) * fv10[0].value,
        p9: (prix / 9) * fv11[0].value,
        p12: (prix / 12) * fv12[0].value,
      });
    } else setPrice({ ...price, p3: 0, p6: 0, p9: 0, p12: 0 });
  };
  return(
    <div className="container my-5 center">
    <form className="row" onSubmit={tab}>
      <div className="col-auto">
        <input
          type="number"
          className="form-control"
          placeholder="Prix"
          onChange={(e) => setPrix(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-danger mb-2 col-auto">
        Calculer
      </button>
    </form>
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th colspan="4">Facilité</th>
        </tr>
        <tr>
          <th scope="col">3 mois</th>
          <th scope="col">6 mois</th>
          <th scope="col">9 mois</th>
          <th scope="col">12 mois</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Number(price.p3).toFixed(3)} dt / mois </td>
          <td>{Number(price.p6).toFixed(3)} dt / mois </td>
          <td>{Number(price.p9).toFixed(3)} dt / mois </td>
          <td>{Number(price.p12).toFixed(3)} dt / mois </td>
        </tr>
      </tbody>
    </table>
    &nbsp;
  </div>
  )
}
