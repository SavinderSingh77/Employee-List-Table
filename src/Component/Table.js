
import React, { useEffect, useMemo } from "react";
import { useTable, useFilters, useGlobalFilter } from "react-table";
import COLUMNS from "./columns.js";
import EMP_LIST from "./data";
import { useSelector } from "react-redux";

const Table = () => {
  const globalSearch = useSelector((store) => store.searchSlice.text);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => EMP_LIST, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useFilters,
    useGlobalFilter
  );

  useEffect(() => {
    setGlobalFilter(globalSearch);
  }, [globalSearch]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = tableInstance;

  console.log(rows);

  return (
    <>
      {rows.length ? (
        <div className="table-main-container">
          <table {...getTableProps()} className="table">
            <thead className="text-white">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="thead-tr">

                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} className="th">
                      {column.render("Header")}
                      <div>
                        {column.canFilter ? (
                          <select
                            className="bg-stone-700 w-[100%]"
                            onChange={(e) => {
                              column.setFilter(e.target.value || undefined);
                            }}
                          >
                            <option value="" className="bg-black text-white ">
                              All
                            </option>
                            {column.render("FilterOptions")}
                          </select>
                        ) : null}
                      </div>
                    </th>
                  ))}

                  
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="tbody">
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="tbody-tr">
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="td">
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="no-match-found">No Matches Found</h2>
      )}
    </>
  );
};

export default Table;
