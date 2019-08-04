import * as React from 'react';
import { useActions } from 'typeless';
import { User, SelectUserActions, getSelectUserState } from '../interface';
import { Form } from 'react-bootstrap';

export const SelectUser = () => {
  const { changeUser } = useActions(SelectUserActions);
  const { allUsers, selected } = getSelectUserState.useState();

  return (
        <Form>
            <Form.Group controlId="UserSelect">
                <Form.Label data-testid="form">選択中のユーザー: {selected.name}</Form.Label>
                <Form.Control as="select" onChange={(e: any) => changeUser(e.target.value)} data-testid="form-control">
                    {allUsers.map((user: User) => <option value={user.userId} key={user.userId} data-testid={user.userId}>{user.name}</option>)}
                </Form.Control>
            </Form.Group>
        </Form>
  );
}
