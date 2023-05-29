import { FilterOptions } from "./FilterOption";

const COLUMNS = [
  {
    Header: "Emp ID",
    accessor: "emp_id",
    FilterOptions: FilterOptions,
    disableFilters: true,
  },

  {
    Header: "Full Name",
    accessor: "name",
    FilterOptions: FilterOptions,
    disableFilters: true,
  },

  {
    Header: "D.O.B",
    accessor: "dob",
    FilterOptions: FilterOptions,
    disableFilters: true,
  },

  {
    Header: "Designation",
    accessor: "designation",
    FilterOptions: FilterOptions,
  },

  {
    Header: "Tech Stack",
    accessor: "tech_stack",
    FilterOptions: FilterOptions,
  },
];

export default COLUMNS;
