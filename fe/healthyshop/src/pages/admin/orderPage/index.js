import { memo, useEffect, useState } from "react";
import "./style.scss";
import { formatter } from "../../../utils/formatter";

const STATUS = {
  ORDERED: {
    key: "ORDERED",
    lable: "Đã đặt",
    className: "orders__dropdown-item",
  },
  PREPARING: {
    key: "PREPARING",
    lable: "Lên đơn",
    className: "orders__dropdown-item",
  },
  DELIVERED: {
    key: "DELIVERED",
    lable: "Đã giao hàng",
    className: "orders__dropdown-item",
  },
  CANCELLED: {
    key: "CANCELLED",
    lable: "Hủy đơn",
    className: "orders__dropdown-item orders__dropdown-item--danger",
  },
};
const OrderAdPage = () => {
  const orders = [
    {
      id: 1,
      total: 100000,
      customerName: "John",
      date: "2023-10-01",
      status: "Đang lên đơn",
    },
    {
      id: 2,
      total: 200000,
      customerName: "Kevin",
      date: "2023-10-02",
      status: "Đang lên đơn",
    },
  ];
  const [activedDropdown, setActivedDropdown] = useState(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdown = event.target.closest(".orders__dropdown");
      if (!isDropdown) {
        setActivedDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="container">
      <div className="orders">
        <h2>Quản lý đơn hàng:</h2>
        <div className="orders__content">
          <table className="orders__table">
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Tổng đơn</th>
                <th>Khách hàng</th>
                <th>Ngày đặt</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, i) => (
                <tr key={i}>
                  <td>
                    <span>{item.id}</span>
                  </td>
                  <td>{formatter(item.total)}</td>
                  <td>{item.customerName}</td>
                  <td> {new Date(item.date).toLocaleDateString()} </td>
                  <td>
                    <div className="orders__dropdown">
                      <button
                        className={`orders__action-button`}
                        onClick={() => {
                          setActivedDropdown(item.id);
                        }}
                      >
                        Đã đặt
                        <span className="arrow">▼</span>
                      </button>
                      {activedDropdown === item.id && (
                        <div className="orders__dropdown-menu">
                          {Object.values(STATUS).map((status) => (
                            <button
                              key={status.key}
                              className={status.className}
                              onClick={() => {
                                setActivedDropdown(null);
                              }}
                            >
                              {status.lable}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="orders__footer">
          <div className="orders__pagination">
            <div className="orders__page-numbers">
              <button className="orders__page-btn">+</button>
              <button className="orders__page-btn orders__page-btn--active">
                1
              </button>
              <button className="orders__page-btn">2</button>
              <button className="orders__page-btn">3</button>
              <button className="orders__page-btn">4</button>
              <button className="orders__page-btn">5</button>
              <button className="orders__page-btn">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderAdPage);
