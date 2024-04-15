import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './model/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './service/auth.service';
import { DatabaseModule } from './config/database.module';
import { AuthController } from './controllers/auth.controller';
import { UserService } from './service/user.service';
import { AppResolver } from './app.resolver'; 

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    JwtModule.register({
      secret: '5fa2048055852ecd3e0e268a0deea9791ca2879535a6754100a21aa0f6d31569',
      signOptions: { expiresIn: '1h' },
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService, AppResolver], 
})
export class AppModule {}
