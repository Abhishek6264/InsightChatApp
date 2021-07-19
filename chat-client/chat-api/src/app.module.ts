import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesGateway } from './gateways/messages.gateway';
import { RoomsController } from './controllers/rooms/rooms.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Message } from './models/message.model';
import { Room } from './models/room.model';
import { User } from './models/user.model';

@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb://chat-admin:password123@localhost/chat',
      {},
    ),
    TypegooseModule.forFeature([Message, Room, User]),
  ],
  controllers: [AppController, RoomsController],
  providers: [AppService, MessagesGateway],
})
export class AppModule {}
