import React, { FC } from "react";

interface cardProps {}

export function CardInfo(props:any) {
    const {title,value,icon} = props
  return (
    <>
      <div className="col-sm-6 col-lg-4">
        <div className="card border-end">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div>
                <div className="d-inline-flex align-items-center">
                  <h2 className="text-dark mb-1 font-weight-medium">{value}</h2>
                  <span className="badge bg-primary font-12 text-white font-weight-medium rounded-pill ms-2 d-lg-block d-md-none">
                    +18.33%
                  </span>
                </div>
                <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                 {title}
                </h6>
              </div>
              <div className="ms-auto mt-md-3 mt-lg-0">
                <span className="opacity-7 text-muted">
                  {icon}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
