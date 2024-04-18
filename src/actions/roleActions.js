export const UPDATE_USER_ROLE = 'UPDATE_USER_ROLE';

export const updateRole = (role) => ({
    type: UPDATE_USER_ROLE,
    payload: role
});