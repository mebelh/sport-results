import Checkbox from 'components/checkbox';
import { observer } from 'mobx-react-lite';
import Button from 'components/button';
import { rootStore } from 'dal/root-store';
import React from 'react';

function SettingsPage() {
  return (
    <>
      <Button
        type="danger"
        text="Выйти"
        onClick={rootStore.dalAuthStore.logout}
        mt={50}
      />

      <Checkbox
        title="Темная тема"
        value={rootStore.dalUIStore.isDark}
        onChange={rootStore.dalUIStore.toggleTheme}
        mt={50}
      />
    </>
  );
}

export default observer(SettingsPage);
