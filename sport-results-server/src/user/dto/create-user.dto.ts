// import { InputType, Field } from '@nestjs/graphql';

// @InputType()
export class CreateUserDto {
  // @Field({ nullable: true })
  email?: string;

  // @Field()
  phone: string;
}
