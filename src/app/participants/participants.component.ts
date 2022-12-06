import { Component, OnInit } from '@angular/core';

import { ParticipantsService } from '../service/participants.service';
import { Participant } from '../models/participant';
 
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  
  participants: Participant[] = [];

  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(){
    this.getParticipants();
  }

  getParticipants() {
    this.participantsService.getParticipants().subscribe((data: Participant[]) => {
      this.participants = data;
    });
  }
}
