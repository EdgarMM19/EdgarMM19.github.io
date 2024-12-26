import React from 'react';

const CustomTable = ({name, data}) => (
  <div>
    <h2>{name}</h2>
    <table className="content-table">
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {item.logo && <td className="table-cell logo-cell">
              <div className="onelogo">
                <img src={item.logo} className="logo-image" alt={item.title}/>
              </div>
            </td>}
            <td className="table-cell content-cell">
              <h3>{item.title}</h3>
              {item.date && <p><em>{item.date}</em></p>}
              <p dangerouslySetInnerHTML={{__html: item.description}}></p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CustomTable;