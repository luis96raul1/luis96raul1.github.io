import styled from "@emotion/styled";

export const StatusButton = styled.button`
  width: 7px !important;
  height: 7px !important;
  border-radius: 50% !important;
  background-color: var(--border, #E0DDD6) !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 3px !important;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  cursor: pointer;

  &.active {
    background-color: var(--accent, #5CB1B5) !important;
    width: 26px !important;
    border-radius: 4px !important;
  }
`
