import { useState } from "react";

// 임의의 환자 목록 만들기
function getPatientList() {
  const patients = [];
  for(var i = 1; i <= 50; i++) {
    patients.push({
      patientCode: "20000" + i,
      patientName: "환자" + i,
      patientBirth: "940606" ,
      patientSex: "M",
      patientTel: "010-9947-7430"
    });
  }

  return patients;
}

function RegisterPatientList(props) {
  const [patientList, setPatientList] = useState(getPatientList);

  // 환자 검색창 상태 
  const [searchContent, setSearchContent] = useState("");

  const changeSearchContent = (event) => {
    setSearchContent(
      event.target.value
    );
  };

  return (
    <div className="RegisterPatientList">
      <div className="RegisterPatientList_header">
        환자 검색
      </div>
      <div className="RegisterPatientList_content border">
        <div className="RegisterPatientList_search mt-1">
          <div className="RegisterPatientList_search_input">
            <input type="text" className="RegisterPatientList_search_input_1" placeholder="이름/생년월일을 입력해 주세요." value={searchContent} onChange={changeSearchContent} />
          </div>
          <div className="RegisterPatientList_search_button">
            <button className="button_team2_fill">검색</button>
          </div>
        </div>
        <div className="RegisterPatientList_content_table">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>환자 코드</th>
                <th>환자명</th>
                <th>생년월일</th>
                <th>성별</th>
                <th>전화번호</th>
              </tr>
            </thead>
            <tbody>
              {/* 임의의 데이터 넣어서 출력 해보기 */}
              {patientList.map(patient => {
                return (
                  <tr key={patient.patientCode}>
                    <td><input type="checkbox" name="chk" value={patient.patientCode}/></td>
                    <td>{patient.patientCode}</td>
                    <td>{patient.patientName}</td>
                    <td>{patient.patientBirth}</td>
                    <td>{patient.patientSex}</td>
                    <td>{patient.patientTel}</td>
                  </tr>
                );
              })}
              {/* <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr>
              <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr>            <tr>
                <td><input type="checkbox" /></td>
                <td>326521</td>
                <td>민지현</td>
                <td>020603</td>
                <td>F</td>
                <td>010-1111-1111</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default RegisterPatientList;
