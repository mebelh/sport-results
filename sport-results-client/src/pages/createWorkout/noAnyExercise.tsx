import Button from 'components/button';
import Typography from 'components/typography';
import React from 'react';
import { Link } from 'react-router-dom';

const NoAnyExercise: React.FC = () => (
  <div>
    <Typography.Text2 mt={50} variant="accent">
      Упражнения не найдены
    </Typography.Text2>
    <Typography.Text3 mt={10}>
      Пожалуйста, создайте хотя бы одно упражнение
    </Typography.Text3>

    <Link to="/exercises/create">
      <Button type="accent" text="Создать упражнение" mt={30} />
    </Link>
  </div>
);

export default NoAnyExercise;
