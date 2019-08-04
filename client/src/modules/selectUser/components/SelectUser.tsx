import * as React from 'react';
import { useActions } from 'typeless';
import { User, getSelectUserState } from '../interface';
import { Form } from 'react-bootstrap';

export const SelectUser = () => {
  const { allUsers, selected } = getSelectUserState.useState();

  return (
      <Form>
          <Form.Group controlId="UserSelect">
              <Form.Label>ユーザー</Form.Label>
              <Form.Control as="select">
                  {allUsers.map((user: User) => <option value={user.name} key={user.userId}>{user.name}</option>)}
              </Form.Control>
          </Form.Group>
      </Form>
  );
}
