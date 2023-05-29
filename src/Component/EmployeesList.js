import Table from "./Table";
import Header from "./Header";
const EmployeesList = () => {
  return (
    <div className="bg-[#edf2f7]  w-full flex flex-col  items-center py-4 px-4  gap-2">
      <h3 className=" font-bold text-[1.5rem] text-gray-600 ">Employee List Data</h3>
      <hr className="h-[2px] w-full bg-gray-300  mb-6 my-2" />
      <Header />
      <Table />
    </div>
  );
};
export default EmployeesList;
