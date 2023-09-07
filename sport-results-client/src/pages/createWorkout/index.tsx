import NoAnyExercise from 'pages/createWorkout/noAnyExercise';
import React, { useEffect } from 'react';
import { rootStore } from 'dal/root-store';
import NavigationBar from 'components/navigationBar';
import Typography from 'components/typography';
import { observer } from 'mobx-react-lite';
import Button from 'components/button';
import Input from 'components/input';
import { MultiSelect } from 'components/select';
import { CreateWorkoutForm } from './style';

const CreateWorkoutPage: React.FC = () => {
  const {
    createWorkoutStore: { init, form, exercises, isLoading },
  } = rootStore;

  useEffect(init, []);

  if (!exercises.length) {
    return <NoAnyExercise />;
  }

  return (
    <div>
      <NavigationBar
        title={<Typography.Text3>Создать тренировку</Typography.Text3>}
      />

      <CreateWorkoutForm onSubmit={form.onSubmit}>
        <Input
          isAutoFocused
          {...form.fields.name.inputProps}
          type="string"
          title="Название"
        />

        <MultiSelect
          {...form.fields.exercises.inputProps}
          elements={exercises}
          title="Упражнения"
        />
        <Button
          type="accent"
          text="Создать"
          isDisabled={form.canSubmit}
          isLoading={isLoading}
          mt={12}
        />
      </CreateWorkoutForm>
    </div>
  );
};

export default observer(CreateWorkoutPage);
