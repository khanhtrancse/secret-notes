const saveUser = (user: any | null, access_token: string | null): void => {
  try {
    if (!user || !access_token) {
      localStorage.removeItem('app-user');
      localStorage.removeItem('app-token');
      return;
    }
    localStorage.setItem('app-user', JSON.stringify(user));
    localStorage.setItem('app-token', access_token);
  } catch (err) {
    console.log('Save user error', err);
  }
};

const loadUser = (): {
  user: any;
  access_token: string;
} | null => {
  try {
    const userData = localStorage.getItem('app-user');
    const token = localStorage.getItem('app-token');
    if (!userData || !token) {
      return null;
    }

    return {
      user: JSON.parse(userData) as any,
      access_token: token,
    };
  } catch (err) {
    console.log('Save user error', err);
  }
  return null;
};

export const storage = {
  loadUser,
  saveUser,
};
