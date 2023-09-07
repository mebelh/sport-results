import Button from 'components/button';
import Typography from 'components/typography';
import React from 'react';
import { Link } from 'react-router-dom';

const NoAnyEquipment: React.FC = () => (
  <div>
    <Typography.Text2 variant="primary" mt={50}>
      Реквизит не найден
    </Typography.Text2>

    <Typography.Text3 mt={20}>
      Пожалуйста, создайте хотя бы один реквизит, прежде чем создавать
      упражнение
    </Typography.Text3>

    <Link to="/equipment">
      <Button type="accent" text="Создать реквизит" mt={30} />
    </Link>
  </div>
);

export default NoAnyEquipment;
