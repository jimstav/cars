import { useSelector } from "react-redux";

function CarList() {
  const cars = useSelector((state) => state.cars.data);

  console.log(cars);

  return <div>CarList</div>;
}

export default CarList;
