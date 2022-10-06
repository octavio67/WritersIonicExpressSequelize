import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WriterService } from '../services/writer.service';


@Component({
  selector: 'app-new-writers',
  templateUrl: './new-writers.page.html',
  styleUrls: ['./new-writers.page.scss'],
})

export class NewWritersPage implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private writerService: WriterService
  ) {
    this.userForm = this.formBuilder.group({
      nombre: [''],
      fechas: [''],
      pais: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.writerService.createWriter(this.userForm.value)
      .subscribe(response => {
        this.zone.run(() => {
          this.userForm.reset();
          this.router.navigate(['/']);
        });
      });
  }

}
