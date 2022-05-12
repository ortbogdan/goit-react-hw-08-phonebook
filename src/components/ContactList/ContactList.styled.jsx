import styled from "styled-components";

export const Contacts = styled.ul`
  width: 300px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  > li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
