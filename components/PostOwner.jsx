import React from "react";

export default function PostOwner(props) {
  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src="/profileImages/--.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5">
            Phanuwat Wongworrakulkit 640610660
          </span>
        </div>
        <span>Quiz ยากจังเลยครับ ง่ายๆ กว่านี้ได้ไหม #261207</span>
        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">100 คน</span>
        </div>
        <hr className="m-0" />
      </div>
    </div>
  );
}
