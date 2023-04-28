import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: any;
  curentUserId: number;

  bsModalRef?: BsModalRef;
  url = 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png';
  constructor(private api: ApiService, private _route: ActivatedRoute, private modalService: BsModalService) {
    console.log(_route.snapshot.params['id']);
    this.curentUserId = _route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getUser(this.curentUserId);
  }

  getUser(userId: number) {
    this.api.getUser(userId).subscribe(res => {
      this.user = res;
      if (!this.user.profileImage) {
        this.user.profileImage = this.url;
      }
      console.log(this.user);
    });
  }

  onFileSelected(event: any) {}
  onEdit() {
    const initialState: ModalOptions = {
      initialState: { userForm: this.user },
    };
    this.bsModalRef = this.modalService.show(EditprofileComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
