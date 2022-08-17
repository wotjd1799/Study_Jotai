import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PageLayout from "../../../components/common/PageLayout";
import AloUtil from "../../../components/common/AloUtil";
import secureStorage from "../../../components/common/SecureStorage";

class NoticeInfoSection extends Component {
  constructor(props) {
    super(props);

    this.is_admin = secureStorage.getItem(AloUtil.cKeyAdminRole);
    this.is_cm = secureStorage.getItem(AloUtil.cKeyContentsManager);
    this.service_admin = secureStorage.getItem(AloUtil.cKeyServiceAdmin);
    this.my_user_key = secureStorage.getItem(AloUtil.cKeyUserKey);
  }

  render() {
    const trainee_list = this.props.trainee_list.map(
      ({ trainee_key, value }, idx) => (
        <div className="add-cell">
          <span className="input-text" style={{ width: "400px" }}>
            <input
              type="text"
              name=""
              placeholder="SELECT TRAINEE"
              style={{
                cursor: this.props.notice_reg.alarm === 0 ? "" : "pointer",
              }}
              value={value}
              onClick={this.props.showJobPop}
              readOnly="readonly"
              disabled={this.props.notice_reg.alarm === 0}
            />
          </span>
          {/* AUDIT TRAIL 아이콘은 첫번째에만 나오도록 수정 */}
          {idx === 0 && this.props.is_info && (
            <a
              className="btn-audit"
              aria-label="Audit Trail"
              style={{ cursor: "pointer" }}
            >
              <i
                className="ico w24 ico-audit-trail"
                onClick={(event) => {
                  this.props.showAudit(event, "trainee_list", "TRAINEE");
                }}
              />
            </a>
          )}
          {this.props.front_error.EC_NO_TRAINEE && (
            <div className="valid-error side" style={{ width: "150px" }}>
              {" "}
              Please check this item,
              <span>
                If you select the Alarm check box, you must select TRAINEE.
              </span>
            </div>
          )}
        </div>
      )
    );

    return (
      <>
        <tr style={{ display: this.service_admin === "true" ? "" : "none" }}>
          {/* notice type */}
          <th scope="row">
            <em className="required" role="img" aria-label="필수입력"></em>TYPE
          </th>
          <td>
            <span
              className="select-wrap"
              style={{ width: "100%", cursor: "pointer" }}
              onChange={this.props.handleChange}
            >
              {console.log("is info: " + this.props.is_info)}
              <select
                disabled={this.props.is_info === true}
                name="notice_type"
                value={this.props.notice_reg.notice_type}
              >
                <option value={AloUtil.cValNoticeTypeCompany} selected>
                  {AloUtil.cValNoticeTypeCompany}
                </option>
                <option value={AloUtil.cValNoticeTypeSystem} selected>
                  {AloUtil.cValNoticeTypeSystem}
                </option>
              </select>
            </span>
          </td>
          <td>
            {this.props.is_info && (
              <a
                className="btn-audit"
                aria-label="Audit Trail"
                style={{ cursor: "pointer" }}
              >
                <i
                  className="ico w24 ico-audit-trail"
                  onClick={(event) => {
                    this.props.showAudit(event, "notice_type", "TYPE");
                  }}
                />
              </a>
            )}
          </td>
        </tr>
        <tr>
          {/* title */}
          <th scope="row">
            <em className="required" role="img" aria-label="필수입력"></em>TITLE
          </th>
          <td>
            <span className="input-text" style={{ width: "100%" }}>
              <input
                type="text"
                title="title"
                name="title"
                value={this.props.notice_reg.title}
                onChange={(event) =>
                  this.props.handleChange(
                    PageLayout.keyUpHandlerByChar(event, 100)
                  )
                }
              />
            </span>
          </td>
          <td>
            {this.props.is_info && (
              <a
                className="btn-audit"
                aria-label="Audit Trail"
                style={{ cursor: "pointer" }}
              >
                <i
                  className="ico w24 ico-audit-trail"
                  onClick={(event) => {
                    this.props.showAudit(event, "title", "TITLE");
                  }}
                />
              </a>
            )}
            {this.props.front_error.EC_NO_TITLE && (
              <div className="valid-error side">
                {" "}
                Please check this item,
                <span>Title is missing.</span>
              </div>
            )}
          </td>
        </tr>
        <tr>
          {/* contents */}
          <th scope="row">
            <em className="required" role="img" aria-label="필수입력"></em>
            CONTENTS
          </th>
          <td>
            <span className="textarea-wrap" style={{ width: "100%" }}>
              <textarea
                title="CONTENTS"
                rows="5"
                cols="10"
                style={{ height: "380px" }}
                value={this.props.notice_reg.contents}
                name="contents"
                onChange={(event) =>
                  this.props.handleChange(
                    PageLayout.keyUpHandlerByChar(event, 3000)
                  )
                }
              />
            </span>
          </td>
          <td>
            {this.props.is_info && (
              <a
                className="btn-audit"
                aria-label="Audit Trail"
                style={{ cursor: "pointer" }}
              >
                <i
                  className="ico w24 ico-audit-trail"
                  onClick={(event) => {
                    this.props.showAudit(event, "contents", "CONTENTS");
                  }}
                />
              </a>
            )}
            {this.props.front_error.EC_NO_CONTENTS && (
              <div className="valid-error side">
                {" "}
                Please check this item,
                <span>Contents is missing.</span>
              </div>
            )}
          </td>
        </tr>
        <tr>
          {/* attachment */}
          <th scope="row"> ATTACHMENT</th>
          <td>
            <div className="input-file-upload">
              <span className="file-txt">
                <input
                  id="upload"
                  title=""
                  className="file-hide"
                  name=""
                  onClick={this.props.showFilePop}
                  style={{ cursor: "pointer" }}
                />
                <input
                  type="text"
                  name=""
                  value={
                    this.props.notice_reg.attach_name === null
                      ? ""
                      : this.props.notice_reg.attach_name
                  }
                  style={{ cursor: "pointer" }}
                />
                <label htmlFor="upload"></label>
              </span>
            </div>
          </td>
          <td>
            {this.props.is_info && (
              <a
                className="btn-audit"
                aria-label="Audit Trail"
                style={{ cursor: "pointer" }}
              >
                <i
                  className="ico w24 ico-audit-trail"
                  onClick={(event) => {
                    this.props.showAudit(
                      event,
                      "attach_name",
                      "ATTACHMENT FILE NAME"
                    );
                  }}
                />
              </a>
            )}
          </td>
        </tr>
        <tr>
          {/* alarm */}
          <th scope="row"> ALARM</th>
          <td>
            <div className="input-wrap">
              <span className="input-checkbox">
                <input
                  type="checkbox"
                  id="alarm"
                  name="alarm"
                  checked={this.props.notice_reg.alarm === 1}
                  onClick={this.props.handleAlarmClick}
                  style={{ cursor: "pointer" }}
                />
                <span></span>
                <label htmlFor="alarm">NOTIFY TRAINEE BY e-MAIL</label>
              </span>
            </div>
          </td>
          <td>
            {this.props.is_info && (
              <a
                className="btn-audit"
                aria-label="Audit Trail"
                style={{ cursor: "pointer" }}
              >
                <i
                  className="ico w24 ico-audit-trail"
                  onClick={(event) => {
                    this.props.showAudit(event, "alarm", "ALARM");
                  }}
                />
              </a>
            )}
          </td>
        </tr>
        <tr
          style={{
            display:
              this.props.notice_reg.notice_type === AloUtil.cValNoticeTypeSystem
                ? "none"
                : "",
          }}
        >
          {/* trainee */}
          <th scope="row">
            <em
              className="required"
              role="img"
              aria-label="필수입력"
              style={{
                display: this.props.notice_reg.alarm === 1 ? "" : "none",
              }}
            ></em>
            TRAINEE
          </th>
          <td colSpan="2">
            {trainee_list}

            {/* ADD Trainee Button*/}
            <div
              className="btn-add-form"
              onClick={this.props.showJobPop}
              style={{
                cursor:
                  this.props.notice_reg.alarm === 0 ? "default" : "pointer",
                pointerEvents: this.props.notice_reg.alarm === 0 ? "none" : "",
              }}
            >
              <a>
                <i className="ico ico-add"></i>ADD TRAINEE
              </a>
            </div>
          </td>
        </tr>
        <tr>
          {/* pin to top */}
          <th scope="row"> PIN TO TOP</th>
          <td>
            <div className="input-wrap">
              <span className="input-checkbox">
                <input
                  type="checkbox"
                  id="pin"
                  name="pin_to_top"
                  checked={this.props.notice_reg.pin_to_top === 1}
                  onChange={this.props.handlePinToTopClick}
                  style={{ cursor: "pointer" }}
                />
                <span></span>
                <label htmlFor="pin">PIN TO TOP</label>
              </span>
            </div>
          </td>
          <td>
            {this.props.is_info && (
              <a
                className="btn-audit"
                aria-label="Audit Trail"
                style={{ cursor: "pointer" }}
              >
                <i
                  className="ico w24 ico-audit-trail"
                  onClick={(event) => {
                    this.props.showAudit(event, "pin_to_top", "PIN TO TOP");
                  }}
                />
              </a>
            )}
          </td>
        </tr>
        {this.props.is_info && (
          <tr>
            {/* deleted */}
            <th scope="row">DELETED</th>
            <td>
              <span className="input-checkbox">
                <input
                  type="checkbox"
                  id="chkDel"
                  name="chkDel"
                  checked={this.props.notice_reg.deleted === 1}
                  onChange={this.props.handleDeletedClick}
                  style={{ cursor: "pointer" }}
                />
                <span></span>
                <label htmlFor="chkDel">DELETED</label>
              </span>
            </td>
            <td>
              <a className="btn-audit" aria-label="Audit Trail">
                <i
                  className="ico w24 ico-audit-trail"
                  onClick={(event) => {
                    this.props.showAudit(event, "deleted", "DELETED");
                  }}
                />
              </a>
              {this.props.front_error.EC_CANNOT_DELETE_NOTICE && (
                <div className="valid-error side">
                  {" "}
                  Please check this item,
                  <span>Can not update the contents of deleted notice.</span>
                </div>
              )}
            </td>
          </tr>
        )}
      </>
    );
  }
}

export default withRouter(NoticeInfoSection);
