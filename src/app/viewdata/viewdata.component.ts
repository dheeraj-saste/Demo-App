import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterData } from '../register/register.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css'],
})
export class ViewdataComponent {
  formValue!: FormGroup;
  registerMoelObject: RegisterData = new RegisterData();
  public getalldata: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}
  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.api.getUser(1).subscribe(res => {
      this.getalldata = res;
    });
  }
}
