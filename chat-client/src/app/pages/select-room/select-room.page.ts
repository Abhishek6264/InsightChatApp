import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room';
import { RoomsService } from '../../services/rooms.service';
import { debounceFn } from 'debounce-decorator-ts';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.page.html',
  styleUrls: ['./select-room.page.scss'],
})
export class SelectRoomPage implements OnInit {

  rooms: Room[];
  roomName: string;

  constructor(
    private roomsService: RoomsService,
    private navController: NavController
    ) { }

  ngOnInit() {
    this.searchRoom('');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @debounceFn(500)
  searchRoom(q: string) {
    const params: any = {};
    if (q) { params.q = q; }
    this.roomsService.find(params).subscribe(rooms => this.rooms = rooms);

  }

  joinRoom(room: Room) {
    // eslint-disable-next-line no-underscore-dangle
    this.navController.navigateRoot('chat-room/' + room._id);
    console.log('Joining a Chat Room:', room);
  }

  addRoom() {
    this.roomsService.save({name: this.roomName}).subscribe(room => {
      this.roomName = '';
      this.rooms.push(room);
    });
    console.log('Adding a Room: ', this.roomName);
  }
}
