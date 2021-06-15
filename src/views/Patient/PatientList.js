function PatientList(props) {
  return (
    <div>
      <div>환자 목록</div>
      <div>
        <div>환자 검색</div>
        <div>
          <input type="text"></input>
          <button>환자 검색</button>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>환자 코드</th>
              <th>환자명</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>전화번호</th>
              <th>주소</th>
              <th>등록 날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientList;