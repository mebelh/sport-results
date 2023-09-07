import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { ApproachEntity } from 'approach/approach.entity';
import { AuthCodeEntity } from 'auth/authCode.entity';
import { EquipmentEntity } from 'equipment/equipment.entity';
import { ExerciseEntity } from 'exercises/exercise.entity';
import { ResultEntity } from 'result/result.entity';
import { UserEntity } from 'user/user.entity';
import { UserModule } from 'user/user.module';
import { ConfigModule } from '@nestjs/config';
import { EquipmentModule } from 'equipment/equipment.module';
import { AuthModule } from 'auth/auth.module';
import { JwtModule } from 'jwt/jwt.module';
import { ExercisesModule } from 'exercises/exercises.module';
import { WorkoutEntity } from 'workout/workout.entity';
import { WorkoutModule } from 'workout/workout.module';
import { ResultModule } from 'result/result.module';
import { ApproachModule } from 'approach/approach.module';
// import { GraphQLModule } from '@nestjs/graphql';
// import { join } from 'path';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // the type of database you want to use
      host: 'db', // the host of your database
      port: 5432, // the port of your database
      username: 'user', // the username for your database
      password: 'pass', // the password for your database
      database: 'sport', // the name of your database
      entities: [
        UserEntity,
        WorkoutEntity,
        ApproachEntity,
        ResultEntity,
        EquipmentEntity,
        ExerciseEntity,
        AuthCodeEntity,
      ],
      synchronize: true, // set to true while developing, so database auto-creates tables and columns on startup
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   context: ({ req }) => ({ req }),
    //   // driver: ApolloDriver,
    //   playground: true, // enables the Apollo Playground
    //   introspection: true, // enables introspection of your schema
    // }),
    UserModule,
    EquipmentModule,
    ExercisesModule,
    JwtModule,
    AuthModule,
    WorkoutModule,
    ResultModule,
    ApproachModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
