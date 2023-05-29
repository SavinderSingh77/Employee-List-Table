import React from "react";

export const FilterOptions = ({ column }) => {
  const { filterValue, setFilter, preFilteredRows, id } = column;

  const options = React.useMemo(() => {
    const allOptions = new Set();
    preFilteredRows.forEach((row) => {
      allOptions.add(row.values[id]);
    });
    return Array.from(allOptions.values());
  }, [id, preFilteredRows]);

  console.log(options)

  return (
    <>
      {options.map((option, index) => (
        <option className="bg-black text-white" key={index} value={option}>
          {option}
        </option>
      ))}
    </>
  );
};
