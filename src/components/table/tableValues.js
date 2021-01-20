import React from "react";

function TableValues({ Y, range, regression }) {
  const renderTable = () => {
    return Y.map((y) =>
      range[y.column] ? (
        <tr key={y.column}>
          <td>{y.column}</td>
          <td>
            {range[y.column][0] || range[y.column][0] === 0
              ? range[y.column][0].toFixed(3)
              : null}
          </td>
          <td>
            {range[y.column][1] || range[y.column][1] === 0
              ? range[y.column][1].toFixed(3)
              : null}
          </td>
          <td>{regression[y.column] ? regression[y.column] : null}</td>
        </tr>
      ) : null
    );
  };
  return renderTable();
}

export default TableValues;
/**import React from "react";

function TableValues({ Y, range, regression }) {
  const renderTable = () => {
    if(Y)
      return Y.map((y) =>{
          console.log(range)
          return(
          range[y.column] ? (
            <tr key={y.column}>
              <td>{y.column}</td>
              <td>
                {range[y.column][0] || range[y.column][0] === 0
                  ? range[y.column][0].toFixed(3)
                  : null}
              </td>
              <td>
                {range[y.column][1] || range[y.column][1] === 0
                  ? range[y.column][1].toFixed(3)
                  : null}
              </td>
              <td>{regression[y.column] ? regression[y.column] : null}</td>
            </tr>
          ) : null)}
        )
  };

  return renderTable();
}
export default TableValues;
 */