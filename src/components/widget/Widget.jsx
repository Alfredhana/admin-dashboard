import "./Widget.css";
export default function Widget() {
  const Button = ({ type, name }) => {
    return <button className={"widgetButton " + type}>{name}</button>;
  };
  return (
    <div className="widget">
      <h3 className="widgetTitle">最新交易</h3>
      <table className="widgetTable">
        <tr className="widgetTr">
          <th className="widgetTh">買家</th>
          <th className="widgetTh">日期</th>
          <th className="widgetTh">數量</th>
          <th className="widgetTh">狀態</th>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <span className="widgetName">Alfred Lau</span>
          </td>
          <td className="widgetDate">2 Jun 2021</td>
          <td className="widgetAmout">$100</td>
          <td className="widgetStatus">
            <Button type="approved" name="已付款" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <span className="widgetName">Edward Wong</span>
          </td>
          <td className="widgetDate">2 Jun 2021</td>
          <td className="widgetAmout">$120</td>
          <td className="widgetStatus">
            <Button type="declined" name="運送中" />
          </td>
        </tr>
      </table>
    </div>
  );
}
