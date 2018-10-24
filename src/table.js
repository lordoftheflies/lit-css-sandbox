import { css } from 'lit-css';

export default css`
  .table {
    border-collapse: collapse;
  }

  .table th,
  .table td {
    border: 1px solid var(--table-border-color, black);
  }
`;
