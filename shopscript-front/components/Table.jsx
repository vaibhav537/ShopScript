import { styled } from "styled-components";

const StyledTable = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  margin: 0;
  position: relative;
  th {
    padding-left: 8px;
    text-align: left;
  }
  td {
    padding: 10px 10px;
    text-align: left;
  }

  thead {
    tr {
      height: 110px;
      background: #CC9544;
      font-size: 16px;
    }
  }
  tbody {
    tr {
      height: 118px;
      border-bottom: 1px solid #e3f1d5;
      &:last-child {
        border: 0;
      }
    }
  }
`;
export default function Table(props) {
  return <StyledTable {...props} />;
}
