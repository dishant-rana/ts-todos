import React from "react";

export const ShowTable = (props: any) => {
  let data = props[0];
  return (
    <div>
      <h2>ShowTable</h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Model</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {data.map((el:any) => {
            return (
              <tr>
                <td>{el.id}</td>
                <td>{el.model}</td> <td>{el.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
